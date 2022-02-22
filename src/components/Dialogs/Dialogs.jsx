import React from "react";
import k from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItems = (props) =>{
    let path = "/dialogs/" + props.id
    return  <div>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Messages = (props)=>{
    return <div>{props.message}</div>
}



const Dialogs = (props) => {
    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
               <DialogsItems  name ="Kate" id="1" />
               <DialogsItems  name ="Sasha" id="2"/>
               <DialogsItems  name ="Kit" id="3"/> 
            </div>

            <div className={k.message}>
                <Messages message ="Hi"/>
                <Messages message ="Hello"/>
                <Messages message ="Yoo what's up?"/>
            </div>
        </div>
    )
}

export default Dialogs;