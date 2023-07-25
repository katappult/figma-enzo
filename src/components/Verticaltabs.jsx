import React, { useState } from "react";
import "../../node_modules/antd/dist/reset.css";
import "../css/Verticaltabs.css";
import Input from "./Input";
import Upload from "./Upload";
import Tabfooter from "./Tabfooter";

import Avatar from "../img/Avatar.png";
import { Tabs } from "antd";
import Password from "antd/es/input/Password";

export default function Verticaltabs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    updateSaveButtonState(value, email);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    updateSaveButtonState(name, value);
  };

  const isValidEmail = (email) => {
    // Cette fonction vérifie que le mail entré respecte le format texte@domaine.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const updateSaveButtonState = (nameValue, emailValue) => {
    const isBothFilled = nameValue !== "" && emailValue !== "";
    const isValidEmailAdress = isValidEmail(emailValue);

    setIsSaveEnabled(isBothFilled && isValidEmailAdress);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    updateSavePasswordButtonState(value, newpassword, confirmpassword);
  };

  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
    //updateSavePasswordButtonState(password, value, confirmpassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    updateSavePasswordButtonState(password, newpassword, value);
  };

  const updateSavePasswordButtonState = (passwordValue, newPasswordValue, confirmPasswordValue) => {
    const isBothFilled = passwordValue !== "" && newPasswordValue !== "" && confirmPasswordValue !== "";
    const isConfirmedPasswordMatch = newPasswordValue === confirmPasswordValue;

    setIsSaveEnabled(isBothFilled && isConfirmedPasswordMatch);
  };

  const handleTabChange = (activeKey) => {
    setActiveTab(activeKey);
    setIsSaveEnabled(false); // Désactive le bouton lorsque l'onglet change
  };

  return (
    <Tabs defaultActiveKey="tab" tabPosition="left" onChange={handleTabChange}>
      <Tabs.TabPane tab="Personal profile" key="tab1">
        <div className="content">
          <div className="section-header">
            <p className="header-title">Personal profile</p>
            <p className="description">
              Update your name, email, photo and details here.
            </p>
          </div>
          <Input
            title="Name"
            desc="This will be displayed on your profile."
            placeholder="Name..."
            value={name}
            onChange={handleNameChange}
          />
          <Input
            title="Email"
            desc=""
            placeholder="your-email@domain.com..."
            value={email}
            onChange={handleEmailChange}
          />
          <Upload
            title="Profile Picture"
            desc="Update your profile picture."
            source={Avatar}
            alt="Avatar"
          />
          <Tabfooter isSaveEnabled={isSaveEnabled} cancel="Cancel" action= "Save"/>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Security" key="tab2">
        <div className="content">
          <div className="section-header">
            <p className="header-title">Password</p>
            <p className="description">
                Update your password regularly to maintain security.
            </p>
          </div>
          <Input
            title="Current Password"
            desc=""
            placeholder="Enter current password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            title="New Password"
            desc=""
            placeholder="Enter the new password"
            value={newpassword}
            onChange={handleNewPasswordChange}
          />
          <Input
            title="Confirm Password"
            desc=""
            placeholder="Re-enter the new password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
          />
          <Tabfooter isSaveEnabled={isSaveEnabled} cancel="Cancel" action= "Change password"/>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Team" key="tab3">
        <div>Tab Content 3</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Plan & Billing" key="tab4">
        <div>Tab Content 4</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Credit" key="tab5">
        <div>Tab Content 5</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Notifications" key="tab6">
        <div>Tab Content 6</div>
      </Tabs.TabPane>
    </Tabs>
  );
}
