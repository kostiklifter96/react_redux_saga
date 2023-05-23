import { all } from "redux-saga/effects";
import { postsWatcher } from "./sagaPosts";
import { commentsWatcher } from "./sagaComments";
import { userWatcher } from "./sagaUser";

export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher(), userWatcher()]);
}
