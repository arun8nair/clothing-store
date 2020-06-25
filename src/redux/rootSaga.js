import {call, all} from 'redux-saga/effects'
import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSagas)]);   // all calls all the sagas concurrently and initialises them seperately
}