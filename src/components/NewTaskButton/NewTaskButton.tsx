import React from "react";
import {ReactComponent as AddIcon} from "../../assets/svg/add.svg";
import "./NewTaskButton.scss";

const NewTaskButton: React.FC = () => {
  return (
    <button
      className="button new-task-button"
      type="button"
      aria-label="New Task">
      <AddIcon />
      Adicionar nova tarefa
    </button>
  );
};

export default NewTaskButton;
