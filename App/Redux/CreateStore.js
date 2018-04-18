import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMonitor = null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
