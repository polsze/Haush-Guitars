import React from 'react';
import '../styles/Logo.css';
import haushLogo from '../images/haushlogo.png';

function Logo() {
	return (
			<div className='logo-container' id='totop'>
				<a href='/' className="navbar-brand">
        			<img src={haushLogo} className='logo img-fluid'alt="Bootstrap" width="130" height="90"/>
      			</a>
			</div>
		);
}

export default Logo;