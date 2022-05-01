import React from "react";
import k from './Dialogs.module.css';

import DialogsItems from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";



const Dialogs = () => {
    let DialogsData = [
        {id:1, name:"Sasha",},
        {id:2, name:"Sanya",},
        {id:3, name:"Kate",}

    ]
let MessageData = [
    {id:1, message:"Hi"},
    {id:2, message:"How are u?"},
    {id:3, message:"Hello..."},
]


let dialogsElements = DialogsData.map(d => <DialogsItems  name ={d.name} id={d.id} />);

    let messagesElements = MessageData.map(m => <Messages message ={m.message} />);

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