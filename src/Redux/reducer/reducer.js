const initialState = {
    posts: [] ,
    comments: [] ,
    message: 'GET_POST_ERROR'
}


export const reducer = (state=initialState , action) => {

    switch(action.type){

        case 'GET_POST_SUCCESS':
            return {...state , posts: action.payload}

        case 'GET_POST_ERROR':
            return {...state , message: action.payload}

        case 'GET_COMMENT_SUCCESS':
            return {...state , comments: action.payload}

        case 'GET_COMMENT_ERROR':
            return {...state , comments: action.payload}

        case 'ADD_NEW_POST': 
            return {...state , comments: [action.payload , ...state.comments]}

        case 'ADD_TO_LIKE':
            return {...state , posts: state.posts.map(like => 
                like.id === action.payload.id ? {...like , likes: like.likes + 1 } : like ) }



        default:
            return state
    }
}

export default reducer;