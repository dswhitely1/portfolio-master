import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import './styles/main.scss';

const AppWithStrictMode = () => (<React.StrictMode><App /></React.StrictMode>);

render(<AppWithStrictMode />, document.getElementById('root'));
