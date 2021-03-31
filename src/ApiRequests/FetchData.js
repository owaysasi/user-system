import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://dummyapi.io/data/api/';
const APP_ID = '605dcfd123d78a50c5067229';

function FetchData ({id, setLoading, setDetails}) {

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => { // to get all details about a certain user passed by "OpenUser" component
        await axios.get(`${URL}/${id}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setDetails({
                firstName : res.data.firstName,
                email : res.data.email,
                gender : res.data.gender,
                lastName : res.data.lastName,
                phone : res.data.phone,
                picture : res.data.picture,
                regDate : res.data.registerDate,
                location : res.data.location,
                birthDate : res.data.dateOfBirth
            });
            console.log(res.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
        })
    };

    return null;
}

export default FetchData;