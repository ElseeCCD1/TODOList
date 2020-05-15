import * as React from 'react';

import styles from './Modal.module.css';

const Modal = (props) => {
  const {width = 340} = props;

  return (
    <>
      <div className={styles.backdrop}>&nbsp;</div>
      <div style={{width: `${width}px`}} className={styles.modal}>
        {props.children}
      </div>
    </>
  )
};

export { Modal };
