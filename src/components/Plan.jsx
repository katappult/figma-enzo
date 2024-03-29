import React, { useState } from 'react';
import Planbox from './Planbox';
import '../css/Plan.css'
import Layertwo from './Layertwo';
import Layerthree from './Layerthreeicon'
import Zapicon from './Zapicon';
import Paymentbox from './Paymentbox';

import {Progress, Button, Modal, ConfigProvider} from 'antd';


export default function Plan({title, desc, duration, price, users_number, all_users}){

    const [modal2Open, setModal2Open] = useState(false);
    const [modalPaymentOpen, setModalPaymentOpen] = useState(false);

    const [isRadioChecked, setIsRadioChecked] = useState(false);

    

    const handleUpgradePlan = () => {
        setIsRadioChecked((prevState) => !prevState);
    };

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
                    <Progress percent={(users_number/all_users)*100} type='primary'/>
            </div>
            <div className="content-box-footer">
                <label htmlFor='PlanModal' className='green-link'>Upgrade Plan</label>
                <button type="primary" onClick={() => setModal2Open(true)} id='PlanModal' style={{display: 'none'}}>
                    Vertically centered modal dialog
                </button>
                <Modal
                    title="Upgrade plan"
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                    footer={null}
                >
                    <div className='modal-container'>
                        <div className='plan-box-container'>
                        <Planbox
                            img_source={<Layertwo/>}
                            title="Free Plan"
                            radio_name="radio free" 
                            radio_id="01" 
                            divClassName="price-container"
                            price={10} 
                            description="Includes up to 10 users, 20GB storage data and access to all features. (Add more users $15/user)"
                            className="action-white-none"
                            button_content=""
                            handleUpgradePlan={handleUpgradePlan}
                        />
                        <Planbox
                            img_source={<Layerthree/>} 
                            title="Business Plan" 
                            radio_name="radio business" 
                            radio_id="02"
                            divClassName="price-container" 
                            price={20} 
                            description="Includes up to 20 users, 40GB storage data and access to all features. (Add more users $15/user)"
                            className="action-white-none"
                            button_content=""
                            handleUpgradePlan={handleUpgradePlan}
                        />
                        <Planbox
                            img_source={<Zapicon/>}
                            title="Entreprise Plan" 
                            radio_name="radio entreprise" 
                            radio_id="03" 
                            divClassName="price-container-none"
                            price="" 
                            description="Unlimited users, unlimited storage data and access to all features."
                            className="action-white"
                            button_content="Contact Sales"
                            handleUpgradePlan={handleUpgradePlan}
                        />
                        </div>
                        <div className='modal-footer'>
                            <a href="#"><button className="action-white">Cancel</button></a>
                            {isRadioChecked ? 
                                <a href="#" className='link-label'><label className="save-label save-label-activated"  htmlFor='idUpgradePlan'>🚀 Upgrade Plan</label></a> 
                                : 
                                <a href="#" className='link-label'><button className="save-label" htmlFor='idUpgradePlan' disabled>🚀 Upgrade Plan</button></a>
                            }
                            <button type="primary" onClick={() => setModalPaymentOpen(true)} id='idUpgradePlan' style={{display: 'none'}}>
                                Vertically centered modal dialog
                            </button>
                            <Modal
                                title="Payment Method"
                                centered
                                open={modalPaymentOpen}
                                onOk={() => setModalPaymentOpen(false)}
                                onCancel={() => setModalPaymentOpen(false)}
                                footer={null}
                            >
                                <div className='modal-container'>
                                    <Paymentbox/>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}