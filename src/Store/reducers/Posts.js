

const initialState = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        author_name: 'Admin',
        author_id: 1
    }
];

export  default function postsList(state = initialState, action) {

    switch (action.type) {
        case 'ADD_POST':
            return  [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    title: action.title,
                    description: action.description
                }
            ];
        case 'EDIT_POST':
            return state.map(post =>
                post.id === post.id ?
                    { ...post, title: post.title, description: post.description } :
                    post
            );
        default:
            return state;
    }

}
