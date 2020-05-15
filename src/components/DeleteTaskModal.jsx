import React from 'react';
import { Modal } from "./Modal/Modal";
import { ModalHeader } from "./Modal/ModalHeader";

const DeleteTaskModal = ({toggleDeleteTaskModalOpened, taskIdToDelete, deleteTask}) => {
  return (
    <Modal>
      <ModalHeader onCrossClick={toggleDeleteTaskModalOpened}>Delete Task?</ModalHeader>
      <button onClick={() => deleteTask(taskIdToDelete)}>Delete</button>
      <button onClick={toggleDeleteTaskModalOpened}>Cancel</button>
    </Modal>
  );
};

export { DeleteTaskModal };
