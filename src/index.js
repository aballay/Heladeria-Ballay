import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDNzRNNWZ2UPnoc7IJniY9T4-VKzkA5UWQ",
  authDomain: "heladeria-ballay.firebaseapp.com",
  projectId: "heladeria-ballay",
  storageBucket: "heladeria-ballay.appspot.com",
  messagingSenderId: "386571676654",
  appId: "1:386571676654:web:5530a6dc545f2999f2bcff"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
