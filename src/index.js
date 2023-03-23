import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Front from './Front'

ReactDOM.createRoot(document.getElementById('front')).render(
  
    <Front />
  
);

setTimeout(()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
},5000);