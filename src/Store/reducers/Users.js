
const initialState = {
    usersList: [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'password'
        }
    ],
    currentUser: {
        id: null,
        name: null,
        email: null,
    }
};

export  default function postsList(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return  {
                usersList: [
                    ...state.usersList,
                    {
                        id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
                        title: action.title,
                        description: action.description
                    }
                ]
            };
        case 'SET_USER':
            return  {
                usersList: [
                    ...state.usersList,
                ],
                currentUser: {
                    id: action.id,
                    name: action.name,
                    email: action.email,
                }
            };
        case 'LOGOUT':
            return  {
                usersList: [
                    ...state.usersList,
                ],
                currentUser: {
                    id: null,
                    name: null,
                    email: null,
                }
            };
        default:
            return state;
    }

}
