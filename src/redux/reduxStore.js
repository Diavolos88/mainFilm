import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import postsReducer from "./postsReducer";
import filmReducer from "./FilmReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dialogsData: dialogReducer,
    reccomendData: filmReducer,
    postsData: postsReducer,
    usersData: usersReducer
})

let store = createStore(reducers)

export default store

// this._state.reccomendData.inputValue = inputFilmReducer(this._state.reccomendData.inputValue, action)
// this._state.dialogsData.inputValue = inputMessageReducer(this._state.dialogsData.inputValue, action)
