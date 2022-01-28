import axios from "axios";

export function fetchPosts() {
    return function (dispatch) {
        dispatch({ type: "POSTS_FETCH_REQUEST", payload: {} })
        axios.get("https://fswi-99acres-clone.herokuapp.com/cities")
            .then(response => {
                dispatch({ type: "POSTS_FETCH_SUCCESS", payload: response.data })
            })
            .catch(error => {
                dispatch({ type: "POSTS_FETCH_FAILURE", payload: "Something went wrong" })
            })

    }
}