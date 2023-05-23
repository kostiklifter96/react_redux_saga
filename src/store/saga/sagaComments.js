import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { FETCH_COMMENTS, getComments } from "../reducers/commentsReducer";

function* fetchCommentsWorker() {
    const { commentsReducer } = yield select();
    const { data } = yield call(
        axios.get,
        `https://jsonplaceholder.typicode.com/posts/${commentsReducer.id}/comments`,
    );

    yield put(getComments(data));
}

export function* commentsWatcher() {
    yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
