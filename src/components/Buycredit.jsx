import {React, useState} from "react";
import '../css/Buycredit.css'
import {Radio} from 'antd';

export default function Buycredit({price10, price20, price30, discount}){

    //const currentPrice = document.querySelector('.ant-radio-button-wrapper .ant-radio-button-wrapper-checked css-dev-only-do-not-override-hfzzpz');
    //const selectedSpan = currentPrice.querySelector('span');

    return(
        <div className="buy-credit-container">
            <div className="buy-credit-box">
                <p className="label-title">How much credit you want to buy?</p>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">10 Credits ${price10}</Radio.Button>
                <Radio.Button value="b">20 Credits ${price20}</Radio.Button>
                <Radio.Button value="c">30 Credits ${price30}</Radio.Button>
                </Radio.Group>
            </div>
            <div className="buy-credit-box">
                <p className="label-title">Discount</p>
                <div className="check-discount">
                <input type="text" className="input-field" placeholder="Have a discount code ? Enter it here !"/>
                <a href="#" className='link-label'><label className="save-label save-label-activated"  htmlFor=''>Check</label></a>
                </div>
            </div>
            <div className="buy-credit-box">
                <p className="label-title">Summary</p>
                <div className="summary-info">
                    <p className="label-title">Credit amount</p>
                    <p className="label-description">10 Credit (${price10})</p>
                </div>
                <div className="summary-info">
                    <p className="label-title">Discount</p>
                    <p className="label-description">${discount}</p>
                </div>
                <div className="summary-info">
                    <p className="label-title">Credit amount</p>
                    <p className="label-description">${price10}</p>
                </div>
            </div>
            <div className="card-details-box">
                <p className="label-title">Credit Details</p>
                <div className="card-details-input-container">
                    <div className="card-details-input-long">
                        <p className="label-title">Name on card</p>
                        <input type="text" className="input-field" />
                    </div>
                    <div className="card-details-input-short">
                        <p className="label-title">Expiry</p>
                        <input type="text" className="input-field" />
                    </div>
                </div>
                <div className="card-details-input-container">
                    <div className="card-details-input-long">
                        <p className="label-title">Card number</p>
                        <input type="text" className="input-field" />
                    </div>
                    <div className="card-details-input-short">
                        <p className="label-title">CVV</p>
                        <input type="text" className="input-field" />
                    </div>
                </div>
            </div>
        </div>
    );
}