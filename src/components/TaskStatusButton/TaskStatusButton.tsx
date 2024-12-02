import React, {useState} from "react";
import "./TaskStatusButton.scss";
import {ReactComponent as CheckIcon} from "../../assets/svg/check.svg";
import {ReactComponent as EditIcon} from "../../assets/svg/edit.svg";

const TaskStatusButton: React.FC = () => {
  // Estado para controlar se a tarefa está concluída ou pendente
  const [isCompleted, setIsCompleted] = useState(false);

  // Função para alternar o estado
  const toggleTaskStatus = () => {
    setIsCompleted(prevState => !prevState);
  };

  return (
    <div
      className={`task-status-button ${isCompleted ? "completed" : "pending"}`}>
      <div className="icon-circle" onClick={toggleTaskStatus}>
        <CheckIcon />
      </div>
      <span className="task-text">
        {isCompleted ? "Tarefa concluída" : "Tarefa pendente"}
      </span>
      <button className="edit-circle" type="button" aria-label="Editar tarefa">
        <EditIcon />
      </button>
    </div>
  );
};

export default TaskStatusButton;
