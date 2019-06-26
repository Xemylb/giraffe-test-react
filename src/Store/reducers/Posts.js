

const initialState = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        author_name: 'Admin',
        author_id: 1
    },
    {
        id: 2,
        title: 'Title 1',
        description: 'Description 1',
        author_name: 'Admin',
        author_id: 2
    },
];

export  default function postsList(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'ADD_POST':
            return  [
                ...state,
                {
                    id: state.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1,
                    title: payload.title,
                    description: payload.description
                }
            ];

        case 'EDIT_POST':
            return state.map(post =>
                post.id === post.id ?
                    { ...post, title: payload.title, description: payload.description } :
                    post
            );

        case 'DELETE_POST':
            return state.filter( post => post.id !== action.id );

        default:
            return state;
    }

}
