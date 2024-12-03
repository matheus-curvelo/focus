import React, {useState} from "react";
import "./SwitchButton.scss";

const SwitchButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="switch-container">
      <div className="switch-button" onClick={toggleSwitch}>
        <div className={`switch-knob ${isOn ? "on" : "off"}`} />
      </div>
      <span className="switch-label">Música</span>
    </div>
  );
};

export default SwitchButton;
