import React from "react";
import k from './Dialogs.module.css';
import { NavLink } from "react-router-dom";





const Dialogs = (props) => {
    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
                <div>
                    <NavLink to={'dialogs/1'}> Sasha</NavLink>
                </div>
                <div>
                    <NavLink to={'dialogs/2'}> Sasha</NavLink>
                </div>
                <div>
                    <NavLink to={'dialogs/3'}> Sasha</NavLink>
                </div>
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