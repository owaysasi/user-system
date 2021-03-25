import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import ReactDOM from 'react-dom';
import Delete from '../Delete/Delete';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Add from '../Add/Add';

const URL = 'https://dummyapi.io/data/api';
const APP_ID = '605c5e8a99206ffc189b27d7';



function User(){

    const [ state, setState ] = useState();
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get(`${URL}/user/0P6E1d4nr0L1ntW8cjGU`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setLoading(true);
            setState({
                firstName : res.data.firstName,
                gender : res.data.gender,
                lastName : res.data.lastName,
                phone : res.data.phone,
                picture : res.data.picture
            }
            );
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
        
    };

    return(
        <div className="user-wrapper">
            <h1>{state.firstName}{state.lastName}</h1>
            <p>{state.gender}</p>
            <p>{state.phone}</p>
            <img className="user-pic" src={state.picture}/>
        </div>
    );
}


export default User;