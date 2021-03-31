import React,{useState} from 'react';
import axios from 'axios';

const URL = 'https://dummyapi.io/data/api/user/';
const APP_ID = '605dcfd123d78a50c5067229';

let details = [];

function FetchCertainData (id) { // get all details about certain user by userID

     axios.get(`${URL}/${id}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            details.push({
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
    return details;
}

export default FetchCertainData;