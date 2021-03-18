

export const getPhotoActions = () => dispatch => {

    fetch('https://api.unsplash.com/photos/?client_id=1yhZFv9gxaB9Qinq1NLPJHBX_Qy7jh_QBFLa1plYK0w')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_POST_SUCCESS' , payload: data}))
        .catch(error => dispatch({type: 'GET_POST_ERROR' , payload: error}))
}

export const getCommentsActions = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_COMMENT_SUCCESS' , payload: data}))
        .catch(error => dispatch({type: 'GET_COMMENT_ERROR' , payload: error}))
}

export const postCommentsActions = (newPost) => dispatch => {

    console.warn(newPost);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_NEW_POST", payload: data }));
}

export const likeButton = (post) => {
    return { type: 'ADD_TO_LIKE' , payload: post }
}