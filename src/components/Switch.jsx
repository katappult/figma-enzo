import {React, useState} from "react";
import '../css/Switch.css'

export default function Switch({handleToggle, label, id_switch}){

    const switchId = `${id_switch}-push`;

    return(
        <div className="switch-container">
            <input type="checkbox" id={switchId} className="input-switch" onClick={handleToggle}/>
            <label htmlFor={switchId} className="button"></label>
            <p className="switch-label">{label}</p>
        </div>
    )
}