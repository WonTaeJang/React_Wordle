import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { combineReducers, createStore} from "redux";
import { Provider } from "react-redux";

let 기본state =  [{word : ''}]
let game_status = true;

function reducer(state = 기본state, 액션){
  if(액션.type === 'btnClick')
  {
    let copy = [...state];
    copy[0].word = 액션.payload;
    return copy
  }

  return state;
}

function game_reducer(state = game_status, action){ 
  console.log(action.type);

  if(action.type === 'game_end')
  {
    let temp = state;
    temp = false;
    return temp;
  }

  if(action.type === 'game_start')
  {
    let temp = state;
    temp = true;
    return temp;
  }

  return state;
}

let store = createStore(combineReducers({reducer, game_reducer}));

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/Wordle"> */}
    <BrowserRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
