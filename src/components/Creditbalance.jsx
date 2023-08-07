import React from "react";
import '../css/Creditbalance.css'
import { Progress} from 'antd';

export default function Creditbalance({credits_used, total_credits}){

    var balance =  total_credits - credits_used;

    return(
        <div className="content-credit">
            <div className="credit-box">
                <div className="credit-box-title">
                    <p className="label-title">Credit balance: {balance}</p>
                    <p className="label-description">Make sure you have enough credits to build your app.</p>
                </div>
                <div className="credit-box-buttons">
                    <a href="#"><button className="save save-activated">Buy Credit</button></a>
                    <a href="#"><button className="action-white">Upgrade</button></a>
                </div>
            </div>
            <Progress type="circle" percent={(credits_used/total_credits)*100} format={() => `${credits_used} / ${total_credits}`} />
        </div>
    );
}