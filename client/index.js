import React from 'react';
import { render } from 'react-dom';
import {  HashRouter as Router, Route, IndexRoute } from 'react-router-dom';
//import Routes from './routes';
import App from './components/App';
import Starter from './components/Starter';



render((
	<Router> 
	<Route path="/" component={App} />
	</Router>
	), document.getElementById('app'));






//<Route exact path ="/" component={Starter} />

