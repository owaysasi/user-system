import React, { useEffect, useState } from 'react';
import './Home.css';
import DeleteUser from '../../Components/DeleteUser/DeleteUser';
import Postbtn from '../../Components/Postbtn/Postbtn';
import OpenUser from '../../Components/OpenUser/OpenUser';
import 'antd/dist/antd.css';
import {FetchingCertianUserDetails, FetchingCertianUserPosts} from '../../ApiRequests';
import { Table, Space } from 'antd';
import AddUser from '../../Components/AddUser/AddUser';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, getUsers } from '../../actions';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';


function Home(){

    const testUser={
        id: 5554,
        firstName: "Oways",
        lastName:"Asi",
        email:"ASDASD@asd.com",
        action: 5554,
        key: 5554
    };

    const users = useSelector((state) => state.dataReducer.users); // GLOBAL STORE
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        // dispatch(getUsers())
        
    },[]);

    const columns = [  // first row of table (all columns topics)
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
            render: (record) => (
                <Space size="middle">
                  <OpenUser id={record.id}/>
                  <Postbtn id={record.id}/>
                  <DeleteUser id={record.id}/>
                </Space>
            )
            
        },
    ];

    function dataChecker (loading, users){
        if(users){
            return(
                <Table 
                    columns={columns} 
                    dataSource={users}
                    pagination={{ pageSize:10 }}
                    bordered={true}
                    size={'big'}
                />
                // <div>{users}</div>
            );
        }
        if(loading) return <div className="loader"></div>

        return null;
    }

    return(
        <div className="home-wrapper">
            <div className="add-btn-cont">
                <h1>User management system</h1>
                <button onClick={() => {
                    console.log(FetchingCertianUserDetails())
                }}>User Details</button>
                <button onClick={() => {
                    console.log(FetchingCertianUserPosts())
                }}>User Posts</button>
                <button onClick={() => {
                    dispatch(addUser(testUser))
                }}>Add New User</button>
                <button onClick={() => {
                    dispatch(deleteUser(testUser.id))
                }}>Delete New User</button>
                <Postbtn/>
                <OpenUser/>
                {/* <button onClick={() => {
                    getData()
                }}>?</button> */}
                <button onClick={() => {
                    // props.setUsers(FetchingAllUsers())
                    dispatch(getUsers());
                }}>All Users</button>
                <AddUser/>
            </div>
            {/* {dataChecker(loading,users)} */}
            {/* {users} */}
            <ul>
                <li>First Name --- Last Name --- Email</li>
                {users.map((user) => {
                    return(
                    <div key={user.id}>{` ${user.firstName} `}{` ${user.lastName}`}</div>
                    );
                })}
            </ul>
        </div>
    );
}

// const mapStatetoProps = (state) => {
//     return {
//         users: state.users
//     };
// }

// const mapDispatchtoProps = {
//     addUser,
//     deleteUser,
//     getUsers
// }

export default Home;