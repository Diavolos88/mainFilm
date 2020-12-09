import {usersAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVA = 'SET_USER_AVA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authAva: null
}
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            let copy = {
                ...state,
                ...action.data,
                isAuth: true
            }
            return copy
        }
        case SET_USER_AVA: {
            let copy = {
                ...state,
                authAva: action.img
            }
            return copy
        }
        default:
            return state
    }
}

export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {
            userId: userId,
            email: email,
            login: login
        }
    }
}

export const setUserAva = (img) => {
    return {
        type: SET_USER_AVA, img: img
    }
}


export const getMe = () => {
    return (dispatch) => {
        usersAPI.author().then(response => {
            let {login, id, email} = response.data
            if (response.resultCode === 0) {
                dispatch(setUserData(id, email, login))
                usersAPI.getOneUser(id).then(response => {
                    dispatch(setUserAva(response.photos.small))
                })
            }
        })

    }
}


export default authReduser