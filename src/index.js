import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tachyons.css'
import NavigationController from './NavigationController/NavigationController';

function App() {
  return (
    <div className="">
      <NavigationController />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


