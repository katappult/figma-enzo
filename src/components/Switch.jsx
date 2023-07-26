import {React, useState} from "react";
import '../css/Switch.css'

export default function Switch({handleToggle, label}){

    return(
        <div className="switch-container">
            <input type="checkbox" id="check" className="input-switch" onClick={handleToggle}/>
            <label htmlFor="check" className="button"></label>
            <p className="switch-label">{label}</p>
        </div>
    )
}