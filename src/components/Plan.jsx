import React from "react";
import '../css/Plan.css'
import { Progress} from 'antd';

export default function Plan({title, desc, duration, price, users_number, all_users}){

    return(
        <div className="content-box">
            <div className="heading-and-price">
                <div className="heading">
                    <div className="heading-content">
                    <p className="label-title">{title}</p>
                    <p className="duration">{duration}</p>
                    </div>
                    <p className="label-description">{desc}</p>
                </div>

                <div className="price">
                    <div className="price-number">${price}</div>
                    <div className="label-description">per month</div>
                </div>
            </div>
            <div className="progress-bar-div">
                <p className="label-progress-bar">{users_number} of {all_users} users</p>
                
                    <Progress percent={(users_number/all_users)*100} />
            </div>
            <div className="content-box-footer">
                <a href="#">Upgrade Plan</a>
            </div>
        </div>
    );
}