import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shopActions";
import ShopActionTypes from './types';

export function* fetchCollectionsAsync() {
    yield console.log("Here")

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error){
        yield put(fetchCollectionsError(error.message));
    }


    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    // }).catch(error => {
    //     // dispatch(fetchCollectionsError(error.message));
    // })
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync )
}