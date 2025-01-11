// src/index.js

import React from 'react'; 
import ReactDOM from 'react-dom'; // To render your app into the DOM
//import './index.css'; // Import global styles (optional)
import App from './App'; // Import your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for routing

// This is where the React app will be rendered into the "root" div in index.html
ReactDOM.render(
  <Router>  {/* Wrap your App with Router if you're using React Router */}
    <App />  {/* Your main App component */}
  </Router>,
  document.getElementById('root')  // This is the div where React will mount your app
);
