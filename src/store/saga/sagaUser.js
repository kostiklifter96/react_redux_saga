import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { FETCH_USER, getUser, getUserPosts } from "../reducers/userReducer";

function* fetchUserWorker() {
    const { userReducer } = yield select();
    const { data: user } = yield call(
        axios.get,
        `https://jsonplaceholder.typicode.com/users/${userReducer.id}`,
    );
    const { data: posts } = yield call(
        axios.get,
        `https://jsonplaceholder.typicode.com/users/${userReducer.id}/posts`,
    );

    yield put(getUser(user));
    yield put(getUserPosts(posts));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, fetchUserWorker);
}
