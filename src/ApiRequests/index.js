import React from 'react';
import axios from 'axios';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';
const USER_ID = '1Lkk06cOUCkiAsUXFLMN';
let details = {};

export const FetchingCertianUserDetails = async () => { // fetch all details about a certian user
    // details={};
    const x = await axios.get(`${URL}/${USER_ID}`, { headers: { 'app-id': APP_ID} })
        const detail = {
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
        console.log(detail)
        return detail ;
        // .catch(err => console.log(err))

};

export const FetchingCertianUserPosts = () => { // fetch all posts belong to certain user
    details=[];
     axios.get(`${URL}/${USER_ID}/post`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            res.data.data.map((row) => details.push({
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
            console.log(res.data.data);
        })
        .catch(err => console.log(err))
        return details;
};

// export const FetchingAllUsers = () => { // Fetching all data of all users
//     data=[];
//     axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
//         .then((res) => {
//             res.data.data.map((row) => data.push({
//                 firstName : row.firstName,
//                 email : row.email,
//                 lastName : row.lastName,
//                 id : row.id,
//                 action : row.id,
//                 key: row.id
//             }))
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log(data))
//     return data;
// };