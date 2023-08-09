import { React, useState } from 'react';
import '../css/Addteammembers.css'
import { Radio, Space } from 'antd';

export default function Addteammembers(){

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return(
        <div className="add-team-m-container">
            <p className="label-title">User Email (mail@domain.com)</p>
            <input type="text" className="input-field" placeholder="Enter your member's mail"/>
            <p className="label-title">Role</p>
            <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
                <Radio value={1}>
                    <div className="label-radio">
                        <p className="label-title">Admin</p>
                        <p className="label-description">Have the highest level of access and can perform administrative functionalities.</p>
                    </div>
                </Radio>
                <Radio value={2}>
                <div className="label-radio">
                    <p className="label-title">Editor</p>
                    <p className="label-description">Have the ability to create and modify app interfaces, configure app logic, and manage project resources.</p>
                </div>
                </Radio>
                <Radio value={3}>
                    <div className="label-radio">
                        <p className="label-title">Guest</p>
                        <p className="label-description">View-only access to specific applications or projects.</p>
                    </div>
                </Radio>
            </Space>
            </Radio.Group>
        </div>
    );
}