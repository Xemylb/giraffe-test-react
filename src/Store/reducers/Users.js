
const initialState = {
    usersList: [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'password'
        },
    ],
    isAuth: false,
    currentUser: {
        id: null,
        name: null,
        email: null,
    }
};

export  default function postsList(state = initialState, action) {

    const {payload} = action;

    switch (action.type) {
        case 'ADD_USER':
            return  {
                usersList: [
                    ...state.usersList,
                    {
                        id: state.usersList.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
                        name: payload.name,
                        email: payload.email,
                        password: payload.password
                    }
                ]
            };
        case 'SET_USER':
            return  {
                usersList: [
                    ...state.usersList,
                ],
                currentUser: {
                    id: payload.id,
                    name: payload.name,
                    email: payload.email,
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
