import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorWrapper from './ErrorWrapper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ErrorWrapper>
      <App name="Пронин Виктор" job="Web-разработчик" phone=" +7(977)832-73-68" email=" exppro1@gmail.com"/>
    </ErrorWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
