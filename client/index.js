import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Routes from './routes';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
//import Starter from './components/Starter';
import Signup from './components/signup';



render((
	<Router> 
	<div>
		<Route path="/" component={App} />
		<Route exact component={Signup} />
		</div>
	</Router>
	), document.getElementById('app'));






//<Route exact path ="/" component={Starter} />

