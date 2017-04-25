import React from 'react';
import { render } from 'react-dom';
import {  HashRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';
import App from './components/App';



render((
	<Router> 
	<Route exact path="/" component={App} />
	</Router>
	), document.getElementById('app'));