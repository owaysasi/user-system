const initialState = {
    users:[
    ]
}

function dataReducer (state = initialState, {type,payload}){
    console.log(state)
    switch(type){
        case "ADD": 
            return {
                ...state,
                users: [...state.users, payload]
            }
            // Array.prototype.push.apply(...state.users, payload)
            // return state.users

        case "DELETE":
            return {
                ...state,
                users:[
                    ...state.users.filter(user => user.id !== payload)
                ]
                // ...state,
                // users: state.users.splice(payload)
                
            };

        case "GET":
            return {
                ...state,
                users: [...state.users, ...payload]
            }
            // Array.prototype.push.apply(state.users, payload)
            // return state
            // return [...state.users, payload];

        default:
            return state;
    }
}


export default dataReducer;