import React from "react";
import "./TaskButtons.scss";
import {ReactComponent as DeleteButton} from "../../assets/svg/delete.svg";
import {ReactComponent as CancelButton} from "../../assets/svg/close.svg";
import {ReactComponent as KeepButton} from "../../assets/svg/save.svg";

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({icon, label, className}) => {
  return (
    <button className={`button ${className}`} type="button" aria-label={label}>
      {icon}
      {label}
    </button>
  );
};

export const ButtonDelete: React.FC = () => {
  return (
    <Button icon={<DeleteButton />} label="Delete" className="button-delete" />
  );
};

export const ButtonCancel: React.FC = () => {
  return (
    <Button icon={<CancelButton />} label="Cancel" className="button-cancel" />
  );
};

export const ButtonKeep: React.FC = () => {
  return <Button icon={<KeepButton />} label="Keep" className="button-keep" />;
};
