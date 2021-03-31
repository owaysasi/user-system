import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import 'antd/dist/antd.css';
import Postbtn from '../../Components/Postbtn/Postbtn';
import { useLocation } from "react-router-dom";
import FetchCertainData from '../../ApiRequests/FetchCertainData';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import Homebtn from '../../Components/Homebtn/Homebtn';
const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';



function UserProfile(){

    const location = useLocation();

    const [ details, setDetails ] = useState({});
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        FetchCertainData(location.state);
        // getData();
    },[]);

    // const getData = async () => { // to get all details about a certain user passed by "OpenUser" component
    //     await axios.get(`${URL}/${location.state}`, { headers: { 'app-id': APP_ID} })
    //     .then((res) => {
    //         setDetails({
    //             firstName : res.data.firstName,
    //             email : res.data.email,
    //             gender : res.data.gender,
    //             lastName : res.data.lastName,
    //             phone : res.data.phone,
    //             picture : res.data.picture,
    //             regDate : res.data.registerDate,
    //             location : res.data.location,
    //             birthDate : res.data.dateOfBirth
    //         });
    //         console.log(res.data);
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => {
    //         setLoading(false);
    //     })
    // };

    return(
        <div className="user-wrapper">
            <div className="homebtn-wrapper">
                <Homebtn/>
            </div>
            {loading ? (<div className="loading">Loading...</div>) :( 
            
                <div className="user-mini-wrapper">
                    <div className="user-pic-wrapper">
                        <img className="user-pic" src={details.picture} alt="profile picture"/>
                        <hr/>
                        <label className="blue-color">Address :</label>
                        <p><strong>{`${details.location.country} / ${details.location.city}`}</strong></p>
                        <label className="blue-color">Date of birth :</label>
                        <p>{details.birthDate.substring(0,10)}</p>
                    </div>
                    <div className="user-data-wrapper">
                        <div className="name-and-gender-wrapper">
                            <h1>{`${details.firstName} ${details.lastName}`}</h1>
                            <p className="user-gender-wrapper">{details.gender === "male" ? <ManOutlined/> 
                            : <WomanOutlined/>}</p>
                        </div>
                        <p className="user-id-wrapper blue-color">{location.state}</p>
                        <label className="blue-color">Email :</label><p><u>{details.email}</u></p>
                        <label className="blue-color">Phone :</label><p>{details.phone}</p>
                        <label className="blue-color">Register date :</label><p>{details.regDate.substring(0,10)}</p>
                        <Postbtn id={location.state}/>
                    </div>
                </div>
            )}
        </div>
    );
}


export default UserProfile;