const initialState = {
    comments: [],
    id: "",
};

export const GET_COMMENTS = "GET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case FETCH_COMMENTS:
            return {
                ...state,
                id: action.payload,
            };

        default:
            return state;
    }
};

export const getComments = (payload) => ({ type: GET_COMMENTS, payload });
export const fetchComments = (payload) => ({ type: FETCH_COMMENTS, payload });
