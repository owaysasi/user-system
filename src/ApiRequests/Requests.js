import React from 'react';
import axios from 'axios';
import { fetchUsers } from '../Features/Slice/UsersSlice/usersSlice'

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';

function fetchUsersDataApi () { // function that returns the response of API
    return axios.get(`${URL}`, { headers: { 'app-id': APP_ID} });
}

export const FetchingCertianUserDetails = async (id) => { // fetch all details of a certian user

    const x = await axios.get(`${URL}/${id}`, { headers: { 'app-id': APP_ID} })
        const details = {
            firstName : x.data.firstName,
            email : x.data.email,
            gender : x.data.gender,
            lastName : x.data.lastName,
            phone : x.data.phone,
            picture : x.data.picture,
            regDate : x.data.registerDate,
            location : x.data.location,
            birthDate : x.data.dateOfBirth
           
        };
        console.log(details)
        return details ;

};

export const FetchingCertianUserPosts = async (id) => { // fetch all posts that belong to certain user

    const x = await axios.get(`${URL}/${id}/post`, { headers: { 'app-id': APP_ID} })
        const details = [];
        x.data.data.map((row) => details.push({
            key : row.id,
            pic : row.image,
            likes : row.likes,
            publishDate : row.publishDate,
            ownerPic: row.owner.picture,
            ownerFirstName: row.owner.firstName,
            ownerLastName: row.owner.lastName,
            text : row.text,
            tags : row.tags
        }));
        return details;
};


  export const fetchDataForEverybody = (setLoading) => {  // function that fetches list of users 
    let data =[];
    return function(dispatch, getState){
      if(!getState()){
        return false;
      }
      return axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
      .then(res => res.data.data.map( row =>data.push(
        {id: row.id, 
          firstName: row.firstName, 
          lastName: row.lastName, 
          email: row.email
        })))
      .finally(() => {
        dispatch(fetchUsers(data))
        setLoading(false)})
    }
  }