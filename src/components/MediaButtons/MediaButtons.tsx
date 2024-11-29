import React from "react";
import "./MediaButtons.scss";
import { ReactComponent as PlayButton } from "../../assets/svg/play.svg";
import { ReactComponent as PauseButton } from "../../assets/svg/pause.svg";
import { ReactComponent as SaveButton } from "../../assets/svg/save.svg";

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ icon, label, className }) => {
  return (
    <button className={`button ${className}`} type="button" aria-label={label}>
      {icon}
      {label}
    </button>
  );
};

export const ButtonPlay: React.FC = () => {
  return <Button icon={<PlayButton />} label="Play" className="button-play" />;
};

export const ButtonPause: React.FC = () => {
  return <Button icon={<PauseButton />} label="Pause" className="button-pause" />;
};

export const ButtonSave: React.FC = () => {
  return <Button icon={<SaveButton />} label="Save" className="button-save" />;
};
