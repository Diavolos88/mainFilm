import React from 'react';
import s from './Users.module.css';
import minion from '../../img/minion.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i === props.currentPage - 2 || i === props.currentPage - 1 || i === props.currentPage ||
            i === props.currentPage + 1 || i === props.currentPage + 2 || i === pagesCount || i === 1) {
            pages.push(i)
        }
    }
    return (
        <div className={s.usersPage}>
            {
                props.usersData.map(u => {
                    return (
                        <div key={u.id} className={s.item}>
                            <div className={s.firstColumn}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.ava} src={u.photos.small != null ? u.photos.small : minion}></img>
                                </NavLink>
                                {!u.followed
                                    ? <button className={s.followButton}
                                              onClick={() => {
                                                  props.follow(u.id)
                                              }} disabled={props.followingInProgress}>Follow</button>
                                    : <button disabled={props.followingInProgress} className={s.followButton}
                                              onClick={() => {
                                                  props.unfollow(u.id)
                                              }}>Unfollow</button>
                                }
                            </div>
                            <div className={s.info}>
                                <div className={s.other + " " + s.name}>{u.name}</div>
                                {/*<div className={s.other + " " + s.county}>{u.location.country}</div>*/}
                                <div className={s.other + " " + s.status}>{u.status}</div>
                                {/*<div className={s.other + " " + s.city}>{u.location.city}</div>*/}
                            </div>
                        </div>
                    );
                })
            }
            {/*<button onClick={getUsers} className={s.show}>Show More</button>*/}
            <div className={s.newPage__block}>
                {pages.map(e => {
                    return <span onClick={() => {
                        props.onPage(e)
                    }}
                                 className={s.numbers + " " + (props.currentPage === e ? s.newPage : "")}>{e}</span>
                })}
            </div>
        </div>
    );
}

export default Users