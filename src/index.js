// index.js file/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppContent from './AppContent';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<React.StrictMode>
<Router>
<AppContent />
</Router>
</React.StrictMode>,
document.getElementById('root')
);

