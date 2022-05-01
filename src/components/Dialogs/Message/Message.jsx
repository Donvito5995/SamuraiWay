import React from "react";
import k from './../Dialogs.module.css';


const Messages = (props)=>{
    return <div className={k.dialogs}>{props.message}</div>
}
export default Messages;