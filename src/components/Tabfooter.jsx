import {React, useState} from "react";
import '../css/Tabfooter.css'

export default function Tabfooter({isSaveEnabled, cancel, action}){

    return(
        <div className="content-footer">
            <a href="#"><button className="cancel">{cancel}</button></a>
            <a href="#"><button className={`save ${isSaveEnabled ? "save-activated" : ""}`} disabled={!isSaveEnabled}>{action}</button></a>
        </div>
    );
}