import React from "react";
import k from './Dialogs.module.css'

const Dialogs = (props)=>{
    return(
        <div className={k.dialogs}>
           
           <div className={k.dialogsItem}>Sasha</div>
           <div className={k.dialogsItem}>Sasha</div>
           <div className={k.dialogsItem}>Sasha</div>
           
           <div className={k.message}>Hi</div>
           <div className={k.message}>Yooooooo </div>
           <div className={k.message}>What's app?</div>
           

           
        </div>
        
        
    )
}

export default Dialogs;