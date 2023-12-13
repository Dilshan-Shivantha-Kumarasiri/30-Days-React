import React from 'react';
import ReactDOM from 'react-dom/client';
import linkdeinPng from "./example-cv-graduate-7c55e4.jpg"

let App = <img width={1000} src={linkdeinPng} alt=""/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {App}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

