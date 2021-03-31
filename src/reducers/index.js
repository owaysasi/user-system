// const users= [
//     {
//      username: "test",
//      id: 1,
//      title: "Eat",
//      completed: true
//     },
//     {
//      username: "test",
//      id: 2,
//      title: "Code",
//      completed: false
//     },
//     {
//      username: "test",
//      id: 3,
//      title: "Sleep",
//      completed: false
//     }
// ];

const initialState = {
    users:[
        {
            id: 5554,
            name: "Oways"
        },
        {
            id: 8652,
            name: "Ali"
        }
    ]
}

function dataReducer (state = initialState, {type,payload}){
    console.log(state)
    switch(type){
        case "ADD": 
            return {
                ...state,
                users: [...state?.users, payload]
            };

        case "DELETE":
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            };

        case "GET":
            return [...state.users, ...payload];

        default:{
            return false;
        }
    }
}


export default dataReducer;