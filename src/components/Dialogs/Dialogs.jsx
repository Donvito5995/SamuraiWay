import React from "react";
import k from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItems = (props) =>{
    return  <div>
    <NavLink to={'dialogs/1'}>{props.name}</NavLink>
</div>
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
                <div>Hi</div>
                <div>Yooooooo </div>
                <div>What's app?</div>
            </div>
        </div>
    )
}

export default Dialogs;