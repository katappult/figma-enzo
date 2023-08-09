import React from "react";
import '../css/Confirmation.css'
import Checkconfirmation from "./Checkconfirmationicon";

export default function Confirmation({message, description}){

    return(
        <div className="confirmation-content">
            <div className="confirmation-icon">
                <Checkconfirmation/>
            </div>
            <div>
                <p className="label-title">{message}</p>
                <p className="label-description">{description}</p>
            </div>
        </div>
    );
}