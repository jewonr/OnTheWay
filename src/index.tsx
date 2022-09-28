import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';
import rootReducer, { initialState } from './modules';
import Thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(Thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
