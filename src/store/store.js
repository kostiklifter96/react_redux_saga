import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { postsReducer } from "./reducers/postsReducer";
import { rootWatcher } from "./saga";
import { commentsReducer } from "./reducers/commentsReducer";
import { userReducer } from "./reducers/userReducer";

const sagaMW = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        postsReducer: postsReducer,
        commentsReducer: commentsReducer,
        userReducer: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMW),
});

sagaMW.run(rootWatcher);
