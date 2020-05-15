import React from 'react';
import styles from './Modal.module.css';

const ModalFooter = (props) => (
  <div className={styles.footer}>
    {props.children}
  </div>
);

export { ModalFooter };

