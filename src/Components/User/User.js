import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const URL = 'https://dummyapi.io/data/api';
const APP_ID = '6059efeea2454da8cd5cba7c';

// const columns = [
//     {
//       title: 'FirstName',
//       dataIndex: 'firstName',
//       key: 'firstName',
//     },
//     {
//       title: 'Id',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//         title: 'Email',
//         dataIndex: 'email',
//         key: 'email',
//     },
//     {
//         title: 'LastName',
//         dataIndex: 'lastName',
//         key: 'lastName',
//     }
// ];

function User(){

    const [ data , setData ] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/user`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            for(let i=0; i<res.data.limit; i++){
                const FirstName = res.data.data[i].firstName;
                const Email = res.data.data[i].email;
                const Id = res.data.data[i].id;
                const LastName = res.data.data[i].lastName;
                data.push({
                    FirstName : FirstName,
                    Email : Email,
                    Id : Id,
                    LastName : LastName
                })
            }
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[]);

    return(
        <div className="user-wrapper">
            User
        </div>
    );
    // ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('user-wrapper'));
}



export default User;