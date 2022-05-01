import React from "react";
import k from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) =>{
    let path = "/dialogs/" + props.id;
    return  <div className={k.dialogs + '' + k.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogsItems;
