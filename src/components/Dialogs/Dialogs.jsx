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


    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
               <DialogsItems  name ={DialogsData[0].name} id={DialogsData[0].id} />
               <DialogsItems  name ={DialogsData[1].name} id={DialogsData[1].id}/>
               <DialogsItems  name ={DialogsData[2].name} id={DialogsData[2].id}/> 
            </div>

            <div className={k.message}>
                <Messages message ={MessageData[0].message}/>
                <Messages message ={MessageData[1].message}/>
                <Messages message ={MessageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;