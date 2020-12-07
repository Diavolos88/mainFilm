import React from 'react';
import s from './Forum.module.css';
import User from './User/User';
import {addPostsActionCreator} from "../../redux/postsReducer";


const Forum = (props) => {
	let postsElements = props.store.getState().postsData.cards.map(post => <User name={post.name} title={post.title} likes={post.likes} ava={post.ava} mes={post.mes} />)
	return (
		<div className={s.forum}>
			{postsElements}
		</div>
	);
}
export default Forum;