import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import ReactDOM from 'react-dom';
import Delete from '../../Components/Delete/Delete';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Add from '../../Components/Add/Add';

const URL = 'https://dummyapi.io/data/api';
const APP_ID = '605c5e8a99206ffc189b27d7';



function Home(){

    const [ state, setState ] = useState();
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get(`${URL}/user`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setLoading(true);
            setState(
                res.data.data.map(row => ({
                    firstName : row.firstName,
                    email : row.email,
                    lastName : row.lastName,
                    id : row.id,
                    action : row.id,
                    key: row.id
                }))
            );
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
        
    };

    const columns = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'x',
            render: (e) => <Delete/>,
        },
    ];

    return(
        <div className="home-wrapper">
            <div className="add-btn-cont">
                <Add/>
            </div>
            {loading ? ("Loading ..."): (
                <Table 
                columns={columns} 
                dataSource={state}
                pagination={{ pageSize:10 }}
                bordered={true}
                size={'middle'}
                />
            )}
            
        </div>
    );
}


export default Home;