import React from 'react';
import logo from '../../src/images/logo.png'

const Header: React.FC = () => {
	return (
		<header className="header">
			<img src={logo} alt="Logo" className="logo" />
            
		</header>
	);
};

export default Header;
