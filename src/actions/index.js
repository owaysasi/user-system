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

export const setUsers = (data) => {
    return{
        type: 'SET',
        payload: data
    };
};