import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import ReactDOM from 'react-dom';
import Delete from '../../Components/Delete/Delete';
import Postbtn from '../../Components/Postbtn/Postbtn';
import Open from '../../Components/Open/Open';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import Add from '../../Components/Add/Add';

const URL = 'https://dummyapi.io/data/api';
const APP_ID = '605dcfd123d78a50c5067229';



function Home(){

    const [ state, setState ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ newUser, setNewUser ] = useState("");


    useEffect(() => {
        getData();
        console.log(newUser);
    },[newUser]);

    const getData = async () => {
        await axios.get(`${URL}/user`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setLoading(true);
            setState(
                res.data.data.map((row) => ({
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
            title: 'Actions',
            dataIndex: 'actions',
            key: 'x',
            width:'150px',
            render: (text,record) => (
                <Space size="middle">
                  <Open id={record.key}/>
                  <Postbtn id={record.key}/>
                  <Delete id={record.key}/>
                </Space>
            )
            
        },
    ];

    return(
        <div className="home-wrapper">
            <div className="add-btn-cont">
                <h1>User management system</h1>
                <Add setNewUser={setNewUser}/>
            </div>
            {loading ? ("Loading ..."): (
                <Table 
                columns={columns} 
                dataSource={state}
                pagination={{ pageSize:10 }}
                bordered={true}
                size={'big'}
                />
            )}
        </div>
    );
}


export default Home;