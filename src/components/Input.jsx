import React from "react";
import '../css/Input.css'

export default function Input(props){

    const {title, desc, placeholder, value, onChange} = props;

    return(
        <div className="content-inputs">
            <div className="section-label">
                <p className="label-title">{title}</p>
                <p className="label-description">{desc}</p>
            </div>
            <input className="input-field" placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
}