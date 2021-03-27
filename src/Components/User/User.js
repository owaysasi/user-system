import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import 'antd/dist/antd.css';
import Postbtn from '../Postbtn/Postbtn';
import { useLocation } from "react-router-dom";
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import Homebtn from '../Homebtn/Homebtn';
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
        .finally(() => setLoading(false));
    };

    return(
        <div className="user-wrapper">
            <div className="homebtn-wrapper">
                <Homebtn/>
            </div>
            {loading ? "Loading ..." : (
                <div className="user-mini-wrapper">
                    <div className="user-pic-wrapper">
                        <img className="user-pic" src={state.picture}/>
                        <hr/>
                        <label className="blue-color">Address :</label>
                        <p><strong>{state.location.country}/{state.location.city}</strong></p>
                        <label className="blue-color">Date of birth :</label>
                        <p>{state.birthDate.substring(0,10)}</p>
                    </div>
                    <div className="user-data-wrapper">
                        <div className="name-and-gender-wrapper">
                            <h1>{`${state.firstName} ${state.lastName}`}</h1>
                            <p className="user-gender-wrapper">{state.gender === "male" ? <ManOutlined/> 
                            : <WomanOutlined/>}</p>
                        </div>
                        <p className="user-id-wrapper blue-color">{location.state}</p>
                        <label className="blue-color">Email :</label><p><u>{state.email}</u></p>
                        <label className="blue-color">Phone :</label><p>{state.phone}</p>
                        <label className="blue-color">Register date :</label><p>{state.regDate.substring(0,10)}</p>
                        <Postbtn id={location.state}/>
                    </div>
                </div>
            )}
        </div>
    );
}


export default User;