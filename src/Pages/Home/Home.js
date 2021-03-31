import React, { useEffect, useState } from 'react';
import './Home.css';
import DeleteUser from '../../Components/DeleteUser/DeleteUser';
import Postbtn from '../../Components/Postbtn/Postbtn';
import OpenUser from '../../Components/OpenUser/OpenUser';
import 'antd/dist/antd.css';
import {FetchingCertianUser} from '../../ApiRequests';
import { Table, Space } from 'antd';
import AddUser from '../../Components/AddUser/AddUser';
import { connect } from 'react-redux';
import { addUser, deleteUser, getUsers } from '../../actions';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';


function Home(props){

    const testUser={
        id: 5554,
        firstname: "Oways",
        lastname:"Asi",
        email:"ASDASD@asd.com",
        action: 5554,
        key: 5554
    };

    // const data = (props) => props.users; // GLOBALIZED STORE
    // const dispatch = useDispatch();

    const [ loading, setLoading ] = useState(false);
    const [ newUser, setNewUser ] = useState("");

    useEffect(() => {
        // FetchAllData("users");
        // dispatch(getUsers(users));
        // console.log(newUser);
    },[]);

    // const getData = () => { // fetch all users data
    //     setLoading(true);
    //     axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
    //     .then((res) => {
    //         res.data.data.map((row) => props.addUser({
    //             firstName : row.firstName,
    //             email : row.email,
    //             lastName : row.lastName,
    //             id : row.id,
    //             action : row.id,
    //             key: row.id
    //         }))
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => {
    //         setLoading(false)
    //     });
        
    // };


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
            render: (record) => (
                <Space size="middle">
                  <OpenUser id={record.key}/>
                  <Postbtn id={record.key}/>
                  <DeleteUser id={record.key}/>
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
                    props.addUser(testUser)
                }}>+</button>
                <button onClick={() => {
                    props.deleteUser(testUser.id)
                }}>-</button>
                {/* <button onClick={() => {
                    getData()
                }}>?</button> */}
                <button onClick={() => {
                    // props.setUsers(FetchingAllUsers())
                    console.log(props.getUsers())
                }}>All</button>
                <AddUser/>
            </div>
            {dataChecker(loading,props.users)}
            {console.log(props.users)}
            {/* {data.map((user) => {
                return(<div key={user.id}>{user.name}</div>);
            })} */}
        </div>
    );
}

// const mapStatetoProps = (state) => {
//     return {
//         users: state.users
//     };
// }

const mapDispatchtoProps = {
    addUser,
    deleteUser,
    getUsers
}

export default connect(null,mapDispatchtoProps)(Home);