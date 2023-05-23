const initialState = {
    posts: [],
};

export const GET_POSTS = "GET_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };

        default:
            return state;
    }
};

export const getPosts = (payload) => ({ type: GET_POSTS, payload });
export const fetchPosts = () => ({ type: FETCH_POSTS });
