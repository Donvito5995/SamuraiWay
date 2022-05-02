import React from "react";
import k from './Dialogs.module.css';

import DialogsItems from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";



const Dialogs = (props) => {
console.log(props,'props');


let dialogsElements = props.dialogs.map(d => <DialogsItems  name={d.name} id={d.id} />);

    let messagesElements = props.message.map(m => <Messages message={m.message} />);

    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={k.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;