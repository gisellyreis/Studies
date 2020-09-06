import * as React from "react";
import Main from "./src/components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/redux/configureStore';

const store = ConfigureStore();

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
