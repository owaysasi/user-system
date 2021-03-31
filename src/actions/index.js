export const addUser = (user) => {
    return{
        type: 'ADD',
        payload: user
    };
};

export const deleteUser = (user) => {
    return{
        type: 'DELETE',
        payload: user
    };
};

export const getUsers = (data) => {
    return{
        type: 'GET',
        payload: data
    };
};