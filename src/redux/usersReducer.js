const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {usersData: [],
                    page: 5,
                    pageSize: 0,
                    currentPage: 1}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            let copy = {...state}
            copy.usersData = [...action.users]
            return copy
        }
        default:
            return state
    }
}

export const followAC = (id) => {
    return {type: FOLLOW, userId: id}
}

export const unfollowAC = (id) => {
    return {type: UNFOLLOW, userId: id}
}

export const setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}
export default usersReduser