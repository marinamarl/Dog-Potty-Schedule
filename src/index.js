import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

require('react-hot-loader/patch');

ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>, document.getElementById('root')
  );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// following modification tells the <AppContainer> to process the module reloading and handle any errors that might be created during runtime.
//
// The would be disabled in the production environment.

if(module.hot){

    module.hot.accept('./App', () => {

    const NextApp = require('./App').default;

    ReactDOM.render(
    <AppContainer>
    <NextApp />
    </AppContainer>,
    document.getElementById('root')
    );

  });
}
