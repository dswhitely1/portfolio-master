import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App';

const AppWithStrictMode = () => (<React.StrictMode><Provider store={store}><Router><App /></Router></Provider></React.StrictMode>);

render(<AppWithStrictMode />, document.getElementById('root'));
