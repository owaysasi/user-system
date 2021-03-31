const initialState = {
    users:[
        // {
        //     id: 5554,
        //     firstname: "Oways",
        //     lastname:"Asi",
        //     email:"ASDASD@asd.com",
        //     action: 5554,
        //     key: 5554
        // },
        // {
        //     id: 5866,
        //     firstname: "Mo",
        //     lastname:"Said",
        //     email:"ASrtASD@asd.com",
        //     action: 5866,
        //     key: 5866
        // },
        // {
        //     id: 2356,
        //     firstname: "Sally",
        //     lastname:"Jeep",
        //     email:"oiSD@asd.com",
        //     action: 2356,
        //     key: 2356
        // }
    ]
}

function dataReducer (state = initialState, {type,payload}){
    console.log(state)
    switch(type){
        case "ADD": 
            return {
                ...state,
                users: [...state.users, payload]
            };

        case "DELETE":
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            };

        case "GET":
            return [...state.users, ...payload];

        default:
            return state;
    }
}


export default dataReducer;