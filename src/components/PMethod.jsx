import React from "react";
import '../css/PMethod.css';

export default function PMethod({title, desc, payment_method, month, year}){

    return(
        <div className="content-box-pmethod">
            <div className="heading-pmethod">
                <div className="heading">
                    <div className="heading-content">
                    <p className="label-title">{title}</p>
                    </div>
                    <p className="label-description">{desc}</p>
                </div>
            </div>
            <div className="progress-bar-div-pmethod">
                <div className="payment-container">
                    <div className="payment-info-container">
                        <img src={payment_method} alt="payment-method" width="50px" height="40px" className="method-container"/>
                        <div className="payment-info">
                            <p className="label-title">Visa ending in 1234</p>
                            <p className="label-description">Expiration {month}/{year}</p>
                            <p className="label-description">billing@mail.com</p>
                        </div>
                    </div>
                    <a href="#"><button className="action-white">Edit</button></a>
                </div>
            </div>
        </div>
    );
}