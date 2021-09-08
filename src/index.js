import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import Home from './screens/home/home';
import Navbar from './components/navbar/navbar';
import Card from './components/card/card';
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Navbar></Navbar>
    <Card></Card>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
