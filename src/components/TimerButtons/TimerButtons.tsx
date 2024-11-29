import React from "react";
import "./TimerButtons.scss";

const TimerButtons: React.FC = () => {
  const buttonLabels = ["Foco", "Descanço curto", "Descanço longo"];

  return (
    <div className="d-flex gap-3">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          className="timer-button"
          type="button"
          aria-label={label}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default TimerButtons;
