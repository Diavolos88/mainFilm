import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from "react-router-dom";
import Forum from './components/Forum/Forum';
import Dialogs from './components/Dialogs/Dialogs';
import ReccomendContainer from "./components/Reccomend/ReccomendContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Route exact path='/' render={() => <ReccomendContainer />}/>
            <Route path='/forum' render={() => <Forum store={props.store}/>}/>
            <Route path='/dialogs' render={() => <Dialogs />}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route path='/login' render={() => <Login />}/>
        </div>
    );
}

export default App;
