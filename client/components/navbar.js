import React from 'react';
import { Link } from 'react-router-dom';


export default () => {

	return (
	<nav className="navbar navbar-default navbar-fixed-top">
	  <div className="container-fluid">
	  	<div className="navbar-header">
	  	<Link to="/" className="navbar-brand">Expresso</Link>
	  	</div>
	  	<div className="collapse-navbar-collapse">
	  		<ul className="nav navbar-nav navbar-right">
	  			<li><Link to="/signup">Sign In</Link></li>
	  		</ul>
	  	</div>
	  </div>
	</nav>
	);
}