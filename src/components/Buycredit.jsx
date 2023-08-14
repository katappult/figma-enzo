import {React, useState} from "react";
import '../css/Buycredit.css'
import Confirmation from "./Confirmation";
import {Radio} from 'antd';
import {Button, Modal, ConfigProvider} from 'antd';

export default function Buycredit({price10, price20, price30, discount}){

    const [isSaveEnabled, setIsSaveEnabled] = useState(false);
    const [modalBuyOpen, setModalBuyOpen] = useState(false); 

    return<>
        <div className="buy-credit-container">
            <div className="buy-credit-box">
                <p className="label-title">How much credits do you want to buy?</p>
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
        <div className='modal-footer'>
            <a href="#"><button className="action-white">Cancel</button></a>
            {isSaveEnabled ? 
                <a href="###" className='link-label'><label className="save-label save-label-activated"  htmlFor='idBuy'>Buy</label></a> 
                : 
                <a href="###" className='link-label'><button className="save-label" htmlFor='idBuy' disabled>Buy</button></a>
            }
            <button type="primary" onClick={() => setModalBuyOpen(true)} id='idBuy' style={{display: 'none'}}>
                                Vertically centered modal dialog
                            </button>
                            <Modal
                                title="Confirm PIN Code"
                                centered
                                open={modalBuyOpen}
                                onOk={() => setModalBuyOpen(false)}
                                onCancel={() => setModalBuyOpen(false)}
                                footer={null}
                            >
                                <div className='modal-container'>
                                    <Confirmation message="Payment details are saved." description="You will be billed automatically every {{Billing Date}}." />
                                </div>
                                <a href="###" className='link-label'><label className="action-white-close"  htmlFor='idClosePayment'>Close</label></a> 
                                <button type="primary" onClick={() => setModalBuyOpen(false)} id='idClosePayment' style={{display: 'none'}}>
                                    Vertically centered modal dialog
                                </button>
                            </Modal>
        </div>
    </>;
}