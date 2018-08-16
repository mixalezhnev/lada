import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}, history) => {
  const middlewares = [
    sagaMiddleware,
    createLogger({
      predicate: (_, action) => action.type !== "DECREASE_TIMER",
      collapsed: (getState, action, logEntry) => !logEntry.error
    }),
    routerMiddleware(history),
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  store.runSaga = sagaMiddleware.run;

  return store;
};
