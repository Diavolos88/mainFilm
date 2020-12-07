import React from 'react';
import s from './NavEntry.module.css';

const NavEntry = () => {
	return (
		<div className={s.entry}>
			<a href='#'>Login</a>
			<a href='#'>Registration</a>
		</div>
	);
}

export default NavEntry;