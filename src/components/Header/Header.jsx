import React from 'react';
import s from './Header.module.css';
import Logo from './HeaderNav/Logo/Logo';
import NavMenu from './HeaderNav/NavMenu/NavMenu';
import NavSearch from './HeaderNav/NavSearch/NavSearch';
import NavEntry from './HeaderNav/NavEntry/NavEntry';

const Header = () => {
	return (
		<header>
			<Logo logo='mainFilm' />
			<NavMenu name='Top-100' />
			<NavMenu name='Films' />
			<NavMenu name='Serials' />
			<NavMenu name='Dialogs' />
			<NavMenu name='Forum' />
			<NavMenu name='Users' />
			<NavEntry />
		</header>
	);
}

export default Header;