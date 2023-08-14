import Checkcircle from './Checkcircle';
import React, { useMemo } from 'react';
import { Button, notification } from 'antd';
import '../css/Tabfooter.css'

const Context = React.createContext({ name: 'Default' });

export default function Tabfooter({isSaveEnabled, cancel, action}){
    
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
      api.info({
        message: `Successfully updated profile`,
        description: <Context.Consumer>{({ name }) => `${name}, Your changes have been saved.`}</Context.Consumer>,
        placement,
        icon:<Checkcircle/>
      });
    };
    const contextValue = useMemo(
      () => ({
        name: 'Ant Design',
      }),
      [],
    );

    return isSaveEnabled ? (
        <Context.Provider value={contextValue}>
            {contextHolder}
        <div className="content-footer">
            <a href="#"><button className="action-white">{cancel}</button></a>
            <a href="#" className='link-label'><label className={`save-label ${isSaveEnabled ? "save-label-activated" : ""}`}  htmlFor='idSaveChanges'>{action}</label></a>
            <button
                onClick={() => openNotification('topRight')}
                id='idSaveChanges' style={{display: 'none'}}
                >
                Save
            </button>
        </div>
        </Context.Provider>
    ) : (
        <Context.Provider value={contextValue}>
            {contextHolder}
        <div className="content-footer">
            <a href="#"><button className="action-white">{cancel}</button></a>
            <a href="#"><button className={`save ${isSaveEnabled ? "save-activated" : ""}`} disabled={!isSaveEnabled}>{action}</button></a>
            <button
                onClick={() => openNotification('topRight')}
                id='idSaveChanges'
                style={{display: 'none'}}
                >
                Save
            </button>
        </div>
        </Context.Provider>
    );
}