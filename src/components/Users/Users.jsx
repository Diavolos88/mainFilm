import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import minion from '../../img/minion.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    getUsers = () => {
        if (this.props.users.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render = () => {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.usersPage}>
                {
                    this.props.users.usersData.map(u => {
                        return (
                            <div key={u.id} className={s.item}>
                                <div className={s.firstColumn}>
                                    <img className={s.ava} src={u.photos.small != null ? u.photos.small : minion}></img>
                                    {u.followed
                                        ? <button className={s.followButton}
                                                  onClick={() => {
                                                      this.props.unfollow(u.id)
                                                  }}>Follow</button>
                                        : <button className={s.followButton}
                                                  onClick={() => {
                                                      this.props.follow(u.id)
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
                <button onClick={this.getUsers} className={s.show}>Show More</button>
                {pages.map(e => {
                    return (
                        <span className={this.props.currentPage === e && s.newPage}>{e}</span>
                    );
                })}
            </div>
        );
    }
}

export default Users