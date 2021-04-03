import React, { useEffect, useState } from 'react';
import './Home.css';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import AddUser from '../../Components/AddUser/AddUser';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../../actions';
import {useHistory} from 'react-router-dom';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';

const {Column} = Table;

function Home(){

    const history = useHistory();
    const users = useSelector((state) => state.dataReducer.users); // GLOBAL STORE
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        dispatch(getUsers())
        setTimeout(() => {
            setLoading(false)
        },[1500])
    },[]);

    function dataChecker (loading, users){
        if(loading) return <div className="loader"></div>
        if(users){
            return(
                <Table 
                    dataSource={users}
                    pagination={{ pageSize:10 }}
                    rowKey={record => record.id}
                    bordered={true}
                    size={'middle'}
                >
                    <Column title="FirstName" dataIndex="firstName" key="firstName" />
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column title="LastName" dataIndex="lastName" key="lastName" />
                    <Column
                    title="Action"
                    key="action"
                    width="250px"
                    render={(text, record) => (
                        <Space size="middle">
                            <a onClick={() => {
                                history.push({pathname:"/posts", state : record.id});
                            }}>Posts</a>
                            <a className="profile-action" onClick={() => {
                                history.push({pathname:"/user", state : record.id});
                            }}>Open Profile</a>
                            <a className="delete-action" onClick={() => {
                                dispatch(deleteUser(record.id))
                            }}>Delete User</a>
                        </Space>
                    )}
                    />
                </Table>
            );
        }

    }

    return(
        <div className="home-wrapper">
            <div className="add-btn-cont">
                <h1>User management system</h1>
                <AddUser/>
            </div>
            {dataChecker(loading,users)}
        </div>
    );
}

export default Home;