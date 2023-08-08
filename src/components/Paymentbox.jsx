import {React, useState} from "react";
import '../css/Paymentbox.css'

export default function Paymentbox(){

    const [isSaveEnabled, setIsSaveEnabled] = useState(false);

    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [province, setProvince] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        updateSaveButtonState(value, expiry, cardNumber, cvv, email, adress, city, state, province);
    };

    const handleExpiryChange = (event) => {
        const value = event.target.value;
        setExpiry(value);
        updateSaveButtonState(name, value, cardNumber, cvv, email, adress, city, state, province);
    };

    const handleCardNumberChange = (event) => {
        const value = event.target.value;
        setCardNumber(value);
        updateSaveButtonState(name, expiry, value, cvv, email, adress, city, state, province);
    };

    const handleCvvChange = (event) => {
        const value = event.target.value;
        setCvv(value);
        updateSaveButtonState(name, expiry, cardNumber, value, email, adress, city, state, province);
    };
    
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        updateSaveButtonState(name, expiry, cardNumber, cvv, value, adress, city, state, province);
    };

    const handleAdressChange = (event) => {
        const value = event.target.value;
        setAdress(value);
        updateSaveButtonState(name, expiry, cardNumber, cvv, email, value, city, state, province);
    };

    const handleCityChange = (event) => {
        const value = event.target.value;
        setCity(value);
        updateSaveButtonState(name, expiry, cardNumber, cvv, email, adress, value, state, province);
    };

    const handleStateChange = (event) => {
        const value = event.target.value;
        setState(value);
        updateSaveButtonState(name, expiry, cardNumber, cvv, email, adress, city, value, province);
    };

    const handleProvinceChange = (event) => {
        const value = event.target.value;
        setProvince(value);
        updateSaveButtonState(name, expiry, cardNumber, cvv, email, adress, city, state, value);
    };
    
    const isValidEmail = (email) => {
        // Cette fonction vérifie que le mail entré respecte le format texte@domaine.com
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const updateSaveButtonState = (nameValue, expiryValue, cardNumberValue, cvvValue, emailValue, adressValue, cityValue, stateValue, provinceValue) => {
        const isAllFilled = nameValue !== "" && expiryValue !== "" && cardNumberValue !== "" && cvvValue !== "" && emailValue !== "" && adressValue !== "" && cityValue !== "" && stateValue !== "" && provinceValue !== "";
        const isValidEmailAdress = isValidEmail(emailValue);
    
        setIsSaveEnabled(isAllFilled && isValidEmailAdress);
    };

    return<>
        <div className="payment-box-container">
            <div className="card-details-box">
                <p className="label-title">Credit Details</p>
                <div className="card-details-input-container">
                    <div className="card-details-input-long">
                        <p className="label-title">Name on card</p>
                        <input type="text" className="input-field" value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="card-details-input-short">
                        <p className="label-title">Expiry</p>
                        <input type="text" className="input-field" value={expiry} onChange={handleExpiryChange}/>
                    </div>
                </div>
                <div className="card-details-input-container">
                    <div className="card-details-input-long">
                        <p className="label-title">Card number</p>
                        <input type="text" className="input-field" value={cardNumber} onChange={handleCardNumberChange}/>
                    </div>
                    <div className="card-details-input-short">
                        <p className="label-title">CVV</p>
                        <input type="text" className="input-field" value={cvv} onChange={handleCvvChange}/>
                    </div>
                </div>
            </div>

            <div className="card-details-box">
                <div className="card-details-input-container">
                    <div className="card-details-input-long2">
                        <p className="label-title">Email Adress</p>
                        <p className="label-description">Invoices will be sent to this email address.</p>
                        <input type="text" className="input-field" value={email} onChange={handleEmailChange}/>
                        <a href="#">+ Add another</a>
                    </div>
                </div>
            </div>

            <div className="card-details-box">
                <div className="card-details-input-container">
                    <div className="card-details-input-long2">
                        <p className="label-title">Street Adress</p>
                        <input type="text" className="input-field" value={adress} onChange={handleAdressChange}/>
                    </div>
                </div>
            </div>

            <div className="card-details-box">
                <div className="card-details-input-container">
                    <div className="card-details-input-long2">
                        <p className="label-title">City</p>
                        <input type="text" className="input-field" value={city} onChange={handleCityChange}/>
                    </div>
                </div>
            </div>

            <div className="card-details-box">
                <div className="card-details-input-container">
                    <div className="card-details-input-short">
                        <p className="label-title">State</p>
                        <input type="text" className="input-field" value={state} onChange={handleStateChange}/>
                    </div>

                    <div className="card-details-input-short">
                        <p className="label-title">Province</p>
                        <input type="text" className="input-field" value={province} onChange={handleProvinceChange}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a href="#"><button className="action-white">Cancel</button></a>
            {isSaveEnabled ? 
                <a href="###" className='link-label'><label className="save-label save-label-activated"  htmlFor='idSavePayment'>Save payment info</label></a> 
                : 
                <a href="###" className='link-label'><button className="save-label" htmlFor='idSavePayment' disabled>Save payment info</button></a>
            }
        </div>
    </>;
}