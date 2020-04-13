import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import './css/main.css';

const AppWithStrictMode = () => (<React.StrictMode><App /></React.StrictMode>);

render(<AppWithStrictMode />, document.getElementById('root'));
