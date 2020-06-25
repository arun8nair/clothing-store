import { call, all } from "redux-saga/effects";
import { shopSagas } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]); // all calls all the sagas concurrently and initialises them seperately
}
