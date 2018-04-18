import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import GameActions from "../Redux/GameRedux";
import { NavigationActions } from "react-navigation";
import R from "ramda";
import { Alert } from "react-native";

export function* getQuestions(api, action) {
  const { data } = action;

  const defaultParams = {
    amount: 10,
    difficulty: "easy",
    type: "boolean"
    // encode: "url3986"
  };
  const params = data || defaultParams;

  const response = yield call(api.getQuestions, params);

  console.log("response", response);

  if (response.ok) {
    const questions = R.pathOr([], ["data", "results"], response);
    yield put(GameActions.triviaSuccess(questions));
    yield put(NavigationActions.navigate({ routeName: "QuestionScreen" }));
  } else {
    yield put(GameActions.triviaFailed());
    Alert.alert("ERROR", "Please try again");
  }
}
