import {React, useState} from "react";
import '../css/Creditbalance.css'
import Buycredit from "./Buycredit";
import { Progress, Button, Modal} from 'antd';

export default function Creditbalance({credits_used, total_credits}){

    const [modalBuyCreditOpen, setModalBuyCreditOpen] = useState(false);

    var balance =  total_credits - credits_used;

    return(
            <div className="content-credit">
                <div className="credit-box">
                <div className="credit-box-title">
                    <p className="label-title">Credit balance: {balance}</p>
                    <p className="label-description">Make sure you have enough credits to build your app.</p>
                </div>
                <div className="credit-box-buttons">
                    <a href="#" className='link-label'><label className="save-label save-label-activated"  htmlFor='idBuyCredit'>Buy Credit</label></a>
                    <Button type="primary" onClick={() => setModalBuyCreditOpen(true)} id='idBuyCredit'>
                        Vertically centered modal dialog
                    </Button>
                    <Modal
                        title="Buy Credit"
                        centered
                        open={modalBuyCreditOpen}
                        onOk={() => setModalBuyCreditOpen(false)}
                        onCancel={() => setModalBuyCreditOpen(false)}
                        >
                        <div className='modal-container'>
                            <Buycredit price10={50} price20={100} price30={150} discount={0}/>
                        </div>
                    </Modal>
                    <a href="#"><button className="action-white">Upgrade</button></a>
                </div>
                </div>
                <Progress type="circle" percent={(credits_used/total_credits)*100} format={() => `${credits_used} / ${total_credits}`} />
            </div>
    );
}