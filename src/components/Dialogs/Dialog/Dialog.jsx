import React from 'react';
import s from './Dialog.module.css';
import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";

const Dialog = (props) => {

    let newMessage = React.createRef()

    let sendMessage = () => {
        let messageValue = newMessage.current.value
        props.sendMessage(messageValue)
    }

    let addNewMessage = () => {
        props.addNewMessage()
    }

    let friendElements = props.friendData.map(frined => <Friends name={frined.name} id={frined.id} img={frined.img}/>)
    let mesElements = props.mesData.map((mes) => <Messages mes={mes.mes} id={mes.id}/>)
    return (
        <div>
            <div className={s.dialog}>
                <div className={s.friends}>
                    {friendElements}
                </div>
                <div className={s.mess}>
                    {mesElements}
                </div>
            </div>
            <div className={s.sendFild}>
                <button  onClick={addNewMessage} className={s.sendMesBut}>Send Message</button>
                <textarea ref={newMessage} onChange={sendMessage} value={props.inputValue.messageValue} className={s.textArea}></textarea>
            </div>
        </div>
    );
}

export default Dialog;