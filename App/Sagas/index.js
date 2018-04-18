import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";

/* ------------- Types ------------- */

import { GameTypes } from "../Redux/GameRedux";

/* ------------- Sagas ------------- */

import { getQuestions } from "./GameSagas";

/* ------------- API ------------- */

const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(GameTypes.TRIVIA_REQUEST, getQuestions, api)
  ]);
}
