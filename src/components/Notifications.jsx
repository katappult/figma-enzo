import {React, useState} from "react";
import Switch from "./Switch";
import '../css/Notifications.css'

export default function Notifications({title, description, id_switch}){

    const [isPushToggled, setIsPushToggled] = useState(false);
    const [isEmailToggled, setIsEmailToggled] = useState(false);
    const [isSMSToggled, setIsSMSToggled] = useState(false);

    const handlePushToggle = () => {
        setIsPushToggled((prevState) => !prevState);
    };

    const handleEmailToggle = () => {
        setIsEmailToggled((prevState) => !prevState);
    };

    const handleSMSToggle = () => {
        setIsSMSToggled((prevState) => !prevState);
    };  

    return(
        <div className="change-box">
            <div className="change-box-info">
                <p className="label-title">{title}</p>
                <p className="label-description">{description}</p>
            </div>
            <div className="change-box-toggles">
                <Switch label="Push" handleToggle={handlePushToggle} id_switch={`${id_switch}-push`} />
                <Switch label="Email" handleToggle={handleEmailToggle} id_switch={`${id_switch}-push`}/>
                <Switch label="SMS" handleToggle={handleSMSToggle} id_switch={`${id_switch}-push`}/>
            </div>
        </div>
    );
}