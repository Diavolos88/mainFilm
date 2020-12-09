import {usersAPI as getOneUser, usersAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            let copy = {...state}
            copy.profile = action.profile
            return copy
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            usersAPI.author().then(response => {
                usersAPI.getOneUser(response.data.id).then(response => {
                    dispatch(setUserProfile(response))
                })
            })
        } else {
            usersAPI.getOneUser(userId).then(response => {
                dispatch(setUserProfile(response))
            })
        }
    }
}

export default profileReduser