import React from 'react';
import { Modal } from "./Modal/Modal";
import { ModalHeader } from "./Modal/ModalHeader";

const DeleteTaskModal = (props) => {
  const {toggleDeleteTaskModalOpened, deleteTask} = props;
  return (
    <Modal>
      <ModalHeader onCrossClick={toggleDeleteTaskModalOpened}>Delete Task?</ModalHeader>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={toggleDeleteTaskModalOpened}>Cancel</button>
    </Modal>
  );
};

export { DeleteTaskModal };
