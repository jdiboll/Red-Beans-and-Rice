import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
//import Routes from './routes';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Welcome from './components/welcome';
import Signup from './components/signup';

const store = createStore (
	(state = {}) => state,
	applyMiddleware(thunk)

	);


render((
	<Provider store={store}>
	<Router> 
	<div>
		<Route path="/" component={App} />
		<Route exact path="/" component={Welcome} />
		<Route path="/signup" component={Signup} />
		</div>
	</Router>
	</Provider>
	), document.getElementById('app'));






//<Route exact path ="/" component={Starter} />

