import React, { useState } from "react";
import "../../node_modules/antd/dist/reset.css";
import "../css/Verticaltabs.css";
import Input from "./Input";
import Upload from "./Upload";
import Tabfooter from "./Tabfooter";
import Switch from "./Switch";
import Tableauteam from "./Tableauteam";
import Plan from "./Plan";
import PMethod from "./PMethod";
import Tableaubilling from "./Tableaubilling";
import Creditbalance from "./Creditbalance";
import Notifications from "./Notifications";

import Avatar from "../img/Avatar.png";
import visa from "../img/visa.svg"

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
  const [isToggled, setIsToggled] = useState(false);

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

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  
  let switchCounter = 0;
  
  const generateUniqueSwitchId = () => {
    switchCounter += 1;
    return `switch-${switchCounter}`;
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
          <div className="bottom-container">
          <div className="section-bottom">
            <p className="header-title">2-Factor-Authentications</p>
            <p className="description">
              Double your account security with 2FA security
            </p>
          </div>
            <Switch label={isToggled ? "Activated" : "Not activated"} handleToggle={handleToggle}/>
          </div>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Team" key="tab3">
      <div className="content">
        <div className="tab-header">
          <div className="section-header">
            <p className="header-title">Team members</p>
            <p className="description">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <a href="#"><button className="add-btn">Add Team Member</button></a>
        </div>
        <Tableauteam/>
      </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Plan & Billing" key="tab4">
      <div className="content">
          <div className="section-header">
            <p className="header-title">Plan</p>
            <p className="description">
              Manage your billing and payment details.
            </p>
          </div>
          <div className="flex-direction-row">
            <Plan title="Free Plan" desc="Our most popular plan for small teams." duration="Monthly" price={0} users_number={3} all_users={20}/>
            <PMethod title="Payment method" desc="Change how you pay for your plan." month={6} year={24} payment_method={visa}/>
          </div>
          <div className="bottom-container-download">
            <div className="section-bottom">
              <p className="header-title">Billing and invoicing</p>
              <p className="description">
                Pick an account plan that fits your workflow.
              </p>
            </div>
            <a href="#"><button className="add-btn">Download all</button></a>
          </div>
          <Tableaubilling alt="pdf"/>
      </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Credit" key="tab5">
        <div className="content">
          <div className="tab-header">
          <div className="section-header">
            <p className="header-title">Credit</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Non ipsum tincidunt etiam quam augue lectus.
            </p>
          </div>
          </div>
          <Creditbalance credits_used={9} total_credits={10}/>
          <Tableaubilling alt="pdf"/>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Notifications" key="tab6">
        <div className="content">
          <div className="tab-header">
            <div className="section-header">
              <p className="header-title">Notifications</p>
              <p className="description">
                We may still send you important notifications about your account outside of your notification settings.
              </p>
            </div>
          </div>
          <Notifications title="Change" description="These are notifications for when someone made a change about your project"  id_switch={generateUniqueSwitchId()}/>
          <Notifications title="Reminders" description="These are notifications to remind you of updates you might have missed."  id_switch={generateUniqueSwitchId()}/>
        </div>
      </Tabs.TabPane>
    </Tabs>
  );
}
