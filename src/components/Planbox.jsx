import {React, useState} from "react";
import '../css/Planbox.css'

export default function Planbox({img_source, title, radio_name, radio_id, divClassName, price, description, className, button_content, handleUpgradePlan}){

    const [isRadioChecked, setIsRadioChecked] = useState(false);

    const handleChange = () => {
        setIsRadioChecked((prevState) => !prevState)
        handleUpgradePlan()
    };

    return(
        <div className="plan-box">
            <div className="plan-box-header">
                {img_source}
                <p className="label-title">{title}</p>
                <input type="radio" name={radio_name} id={radio_id} checked={isRadioChecked} onChange={handleChange}/>
            </div>
            <div className="plan-box-content">
                <div className={divClassName}>
                    <p className="plan-price">${price}</p>
                    <p className="label-description">per month</p>
                </div>
                <p className="label-description">{description}</p>
                <a href="#"><button className={className}>{button_content}</button></a> {/*action-white*/}
            </div>
        </div>
    );
}