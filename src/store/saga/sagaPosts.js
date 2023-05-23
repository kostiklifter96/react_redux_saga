import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_POSTS, getPosts } from "../reducers/postsReducer";

function* fetchPostsWorker() {
    const { data } = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");

    yield put(getPosts(data));
}

export function* postsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
