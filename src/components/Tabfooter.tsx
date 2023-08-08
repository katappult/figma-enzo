import {
    RadiusUprightOutlined,
} from '@ant-design/icons';
import Checkcircle from './Checkcircle';
import React, { useMemo } from 'react';
import { Button, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import '../css/Tabfooter.css'

const Context = React.createContext({ name: 'Default' });

export default function Tabfooter({isSaveEnabled, cancel, action}){

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement: NotificationPlacement) => {
        api.info({
        message: `Successfully updated profile`,
        description: <Context.Consumer>{({ name }) => `${name}, your changes have been saved.`}</Context.Consumer>,
        icon:<Checkcircle/>,
        placement,
        });
    };

    const contextValue = useMemo(() => ({ name: 'Katappult User' }), []);

    return isSaveEnabled ? (
        <Context.Provider value={contextValue}>
            {contextHolder}
        <div className="content-footer">
            <a href="#"><button className="action-white">{cancel}</button></a>
            <a href="#" className='link-label'><label className={`save-label ${isSaveEnabled ? "save-label-activated" : ""}`}  htmlFor='idSaveChanges'>{action}</label></a>
            <Button
                type="primary"
                onClick={() => openNotification('topRight')}
                id='idSaveChanges'
                >
                Save
            </Button>
        </div>
        </Context.Provider>
    ) : (
        <Context.Provider value={contextValue}>
            {contextHolder}
        <div className="content-footer">
            <a href="#"><button className="action-white">{cancel}</button></a>
            <a href="#"><button className={`save ${isSaveEnabled ? "save-activated" : ""}`} disabled={!isSaveEnabled}>{action}</button></a>
            <Button
                type="primary"
                onClick={() => openNotification('topRight')}
                id='idSaveChanges'
                >
                Save
            </Button>
        </div>
        </Context.Provider>
    );
}