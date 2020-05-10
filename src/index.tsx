import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App';
import 'styles/main.scss'

const AppWithStrictMode = () => (<React.StrictMode><Router><App /></Router></React.StrictMode>);

render(<AppWithStrictMode />, document.getElementById('root'));
