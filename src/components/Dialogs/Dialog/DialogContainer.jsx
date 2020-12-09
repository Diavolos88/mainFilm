import React from 'react';
import {addMessage, addMessageCreatorAction} from "../../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendData: state.dialogsData.friendData,
        mesData: state.dialogsData.mesData,
        inputValue: state.dialogsData.inputValue,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageValue) => {
            dispatch(addMessageCreatorAction(messageValue))
        },
        addNewMessage: () => {
            dispatch(addMessage())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;