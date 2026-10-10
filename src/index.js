   import React from 'react';
   import ReactDOM from 'react-dom';
   import axios from 'axios';
   import App from './App';
   import './styles.css'

   axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

   ReactDOM.render(<App />, document.getElementById('root'));