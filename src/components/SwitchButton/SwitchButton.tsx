import React, {useState} from "react";
import "./SwitchButton.scss";

interface SwitchButtonProps {
  label: string; // Texto opcional ao lado do botão
}

const SwitchButton: React.FC<SwitchButtonProps> = ({label}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="switch-container">
      <div className="switch-button" onClick={toggleSwitch}>
        <div className={`switch-knob ${isOn ? "on" : "off"}`} />
      </div>
      {label && <span className="switch-label">{label}</span>}
    </div>
  );
};

export default SwitchButton;
