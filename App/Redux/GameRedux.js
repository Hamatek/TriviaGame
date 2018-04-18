import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  triviaRequest: ["data"],
  triviaSuccess: ["payload"],
  triviaFailure: null,
  submitAnswer: ["data"],
  nextQuestion: null
});

export const GameTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  questions: [],
  fetching: false,
  questionIndex: 0,
  totalQuestions: 0,
  totalCorrect: 0,
  answers: {}
});

/* ------------- Selectors ------------- */

export const GameSelectors = {
  selectQuestions: state => state.game.questions
};

/* ------------- Reducers ------------- */

export const request = state =>
  state.merge({ questionIndex: 0, fetching: true });

export const success = (state, { payload }) => {
  return state.merge({
    fetching: false,
    error: null,
    questions: payload,
    totalQuestions: payload.length
  });
};

export const addAnswer = (state, { data }) => {
  // convert question correct answer to boolean, works only for bool quizz
  const correctAnswer =
    state.questions[state.questionIndex].correct_answer == "True";
  return state.merge({
    totalCorrect:
      correctAnswer === data ? state.totalCorrect + 1 : state.totalCorrect,
    answers: {
      ...state.answers,
      [state.questionIndex]: {
        userAnswer: data,
        isCorrect: correctAnswer === data,
        correctAnswer
      }
    }
  });
};

export const incQuestionIndex = state => {
  //check if our index reached the end
  if (state.questionIndex + 1 === state.totalQuestions) return state;
  return state.merge({
    questionIndex: state.questionIndex + 1
  });
};

export const failure = state => state.merge({ fetching: false, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRIVIA_REQUEST]: request,
  [Types.TRIVIA_SUCCESS]: success,
  [Types.TRIVIA_FAILURE]: failure,
  [Types.SUBMIT_ANSWER]: addAnswer,
  [Types.NEXT_QUESTION]: incQuestionIndex
});
