import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

const AppWithStrictMode = () => (<React.StrictMode><App /></React.StrictMode>);

render(<AppWithStrictMode />, document.getElementById('root'));
