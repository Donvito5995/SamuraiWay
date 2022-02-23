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

let Dialogs = DialogsData.map(d => <DialogsItems  name ={d.name} id={d.id} />)

let Message = MessageData.map(m => <Messages message ={m.message} />)


    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
               {Dialogs}
            </div>

            <div className={k.message}>
                {Message}
            </div>
        </div>
    )
}

export default Dialogs;