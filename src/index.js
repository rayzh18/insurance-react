import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

import './sass/style.scss';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>, 
// 	document.getElementById('root')
// );

ReactDOM.render(
		<App />, 
	document.getElementById('root')
);

