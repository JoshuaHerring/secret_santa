import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import Header from './App/Header/Header';
import Main from './App/Main/Main';
import Footer from './App/Footer/Footer';
import reportWebVitals from './reportWebVitals';

// Renders the whold html body based off of the return of all of my class componenets
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
