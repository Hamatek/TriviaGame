import { Provider } from "react-redux";
import RootContainer from "./RootContainer";
import createStore from "../Redux";
import React, { Component } from "react";
// create our store
const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
