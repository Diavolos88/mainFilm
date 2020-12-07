import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
	const url = '/Dialogs/' + props.id
	return (
		<div className={s.friend}>
			<img className={s.image} src={props.img} alt="" />
			<NavLink className={s.link} to={url} activeClassName={s.activeLink} >{props.name}</NavLink>
		</div>
	);
}

export default Friends;