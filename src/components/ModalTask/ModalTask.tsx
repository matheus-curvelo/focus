import React from "react";
import "./ModalTask.scss";
import {ReactComponent as DeleteIcon} from "../../assets/svg/delete.svg";
import {ReactComponent as CloseIcon} from "../../assets/svg/close.svg";
import {ReactComponent as SaveIcon} from "../../assets/svg/save.svg";

const ModalTask: React.FC = () => {
  return (
    <div className="modal-task">
      <h4 className="modal-task-title">Adicionando tarefa</h4>
      <textarea
        className="modal-task-input"
        placeholder="No que você está trabalhando"
      />
      <div className="modal-task-footer">
        <button className="modal-task-button modal-task-button--delete">
          <DeleteIcon />
          Deletar
        </button>
        <div className="modal-task-actions">
          <button className="modal-task-button modal-task-button--cancel">
            <CloseIcon />
            Cancelar
          </button>
          <button className="modal-task-button modal-task-button--save">
            <SaveIcon />
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
