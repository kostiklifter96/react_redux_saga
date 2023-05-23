const initialState = {
    user: [],
    userPosts: [],
    id: "",
};

export const GET_USER = "GET_USER";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const FETCH_USER = "FETCH_USER";

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case GET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload,
            };
        case FETCH_USER:
            return {
                ...state,
                id: action.payload,
            };

        default:
            return state;
    }
};

export const getUser = (payload) => ({ type: GET_USER, payload });
export const getUserPosts = (payload) => ({ type: GET_USER_POSTS, payload });
export const fetchUser = (payload) => ({ type: FETCH_USER, payload });
