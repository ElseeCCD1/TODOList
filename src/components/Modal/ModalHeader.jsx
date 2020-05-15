import React from 'react';
import styles from './Modal.module.css';

const ModalHeader = (props) => (
  <>
    <h3 className={styles.title}>{props.children}</h3>
    <span onClick={props.onCrossClick} className={styles.cross}>✖</span>
  </>
);

export { ModalHeader };
