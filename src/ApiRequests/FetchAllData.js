import React from 'react';
import axios from 'axios';
import { addUser, deleteUser } from '../actions';
import { useSelector, useDispatch, connect } from 'react-redux';

const URL = 'https://dummyapi.io/data/api/';
const APP_ID = '605dcfd123d78a50c5067229';

let users =[];


function FetchAllData (props) {

     // to get all details about a certain user passed by "OpenUser" component
     axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            res.data.data.map((row) => props.addUser({
                firstName : row.firstName,
                email : row.email,
                lastName : row.lastName,
                id : row.id,
                action : row.id,
                key: row.id
            }))
        })
        .catch(err => console.log(err))
        .finally(() => {
            console.log()
        });
    return users;
    //  else{
    //     axios.get(`${URL}/${id}/post`, { headers: { 'app-id': APP_ID} })
    //     .then((res) => {
    //         users.push(
    //             res.data.data.map((row) => ({
    //                 key : row.id,
    //                 pic : row.image,
    //                 likes : row.likes,
    //                 publishDate : row.publishDate,
    //                 ownerPic: row.owner.picture,
    //                 ownerFirstName: row.owner.firstName,
    //                 ownerLastName: row.owner.lastName,
    //                 text : row.text,
    //                 tags : row.tags
    //             })));
    //         console.log(res.data.data);
    //     })
    //     .catch(err => console.log(err))
    //     return users;
    //  }
}

const mapDispatchtoProps = {
    addUser,
    deleteUser,
}

const mapStatetoProps = (state) => {
    return {
        users: state.users
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(FetchAllData);