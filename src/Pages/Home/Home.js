import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import store from '../../index';
import ReactDOM from 'react-dom';
import DeleteUser from '../../Components/DeleteUser/DeleteUser';
import Postbtn from '../../Components/Postbtn/Postbtn';
import OpenUser from '../../Components/OpenUser/OpenUser';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import AddUser from '../../Components/AddUser/AddUser';
import { useSelector, useDispatch, connect } from 'react-redux';
import { addUser } from '../../actions';
import { deleteUser } from '../../actions';
import { getUsers } from '../../actions';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';



function Home(){

    const data = useSelector(state => state.users); // GLOBALIZED STORE
    const dispatch = useDispatch();
    // const {
    //     dispatch
    // }=store

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ newUser, setNewUser ] = useState("");

    let userTest={
        id: 5463,
        name: "asdasd",
        age: 25
    };

    useEffect(() => {
        getData();
        // dispatch(getUsers(users));
        console.log(newUser);
    },[]);

    const getData = () => {
        setLoading(true);
        axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setUsers(
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
                  <OpenUser id={record.key}/>
                  <Postbtn id={record.key}/>
                  <DeleteUser id={record.key}/>
                </Space>
            )
            
        },
    ];

    function dataChecker (loading, data){
        if(data){
            return(
                <Table 
                    columns={columns} 
                    dataSource={users}
                    pagination={{ pageSize:10 }}
                    bordered={true}
                    size={'big'}
                />
            );
        }
        if(loading) return <div>Loading</div>

        return null;
    }

    return(
        <div className="home-wrapper">
            <div className="add-btn-cont">
                <h1>User management system</h1>
                <AddUser setNewUser={setNewUser}/>
                <button onClick={() => {
                    dispatch(addUser(userTest))
                }}>+</button>
                <button onClick={() => {
                    dispatch(deleteUser("Bye"))
                }}>-</button>
                
            </div>
            {data}
            {dataChecker(loading,users)}
            {/* {(loading && state) ? ("Loading ..."):
                <Table 
                columns={columns} 
                dataSource={state}
                pagination={{ pageSize:10 }}
                bordered={true}
                size={'big'}
                />
            )} */}
        </div>
    );
}

// const mapStatetoProps = (state) => {
//     return {state};
// }

// const mapDispatchtoProps = (dispatch) => {
//     return {addUser};
// }

export default Home;