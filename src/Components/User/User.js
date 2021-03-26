import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import 'antd/dist/antd.css';
import { useLocation } from "react-router-dom";
const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';



function User(){

    const location = useLocation();

    const [ state, setState ] = useState({});
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get(`${URL}/${location.state}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setLoading(true);
            setState({
                firstName : res.data.firstName,
                gender : res.data.gender,
                lastName : res.data.lastName,
                phone : res.data.phone,
                picture : res.data.picture
            });
        })
        .catch(err => console.log(err))
        setLoading(false);
    };

    return(
        <div className="user-wrapper">
            {loading ? "Loading ..." : (
                <div>
                    <img className="user-pic" src={state.picture}/>
                    <h1>{`${state.firstName} ${state.lastName}`}</h1>
                </div>
            )}
        </div>
    );
}


export default User;