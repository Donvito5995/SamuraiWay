import React from "react";
import k from './Dialogs.module.css';

import DialogsItems from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";



const Dialogs = (props) => {
console.log(props,'props');


let dialogsElements = props.dialogs.map(d => <DialogsItems  name={d.name} id={d.id} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let messagesElements = props.message.map(m => <Messages message={m.message} />);

    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={k.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessage}>Write your message</textarea>
            <button onClick={sendMessage}>Send </button>
        </div>
    )

}

export default Dialogs;