import React from "react";
import ReactDOM from "react-dom";

import "babel-polyfill";

import "./index.css";
import globalStyles from './globalStyles';

// import StyleThemeProvider from 'containers/StyleThemeProvider';
import { Provider } from "react-redux";
import App from "./App";
import { HashRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { push } from "react-router-redux";

// import 'polyfills/index';
import confitureStore from "./configureStore";
import sagas from "./sagas";
import initReactFastclick from "react-fastclick";

initReactFastclick();

const startApp = () => {
  const history = createHistory();
  const store = confitureStore({}, history);
  window.__REDUX__ = store;
  store.runSaga(sagas);
  // const langText = new LangTextCreater(store);
  // cordovaApi.lockPortrait();
  window.screen.orientation.unlock();
  window.screen.orientation.lock("landscape");

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter history={history}>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};

window.currentBuild = 1;

window.updateCouner = 0;
window.stalemateCheckAllowed = false;

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}
