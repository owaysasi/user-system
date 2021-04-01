import axios from 'axios';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';

export const addUser = (user) => { // add a new user
    return{
        type: 'ADD',
        payload: user
    };
};

export const deleteUser = (user) => { // delete a specific user
    return{
        type: 'DELETE',
        payload: user
    };
};

export const getUsers = () => {  // Fetching all data of all users

    const users=[];
    return axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            res.data.data.map((row) => users.push({
                firstName : row.firstName,
                email : row.email,
                lastName : row.lastName,
                id : row.id,
                action : row.id,
                key: row.id
            }))
            return{
                type: 'GET',
                payload: users
            };
        })
        .catch(err => console.log(err))
        .finally(() => console.log(users))

};