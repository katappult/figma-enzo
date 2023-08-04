// Switch.jsx
import React, { useState } from "react";
import "../css/Switch.css";

export default function Switch({ handleToggle, label, id_switch }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled((prevState) => !prevState);
    handleToggle();
  };

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        id={`switch-${id_switch}`}
        className="input-switch"
        checked={isToggled}
        onChange={handleChange}
      />
      <label htmlFor={`switch-${id_switch}`} className="button"></label>
      <p className="switch-label">{label}</p>
    </div>
  );
}
