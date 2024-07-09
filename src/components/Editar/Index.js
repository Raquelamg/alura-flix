import React from 'react';
import styles from './editar.module.css'; // Asegúrate de tener estilos para el modal
import cerrar from "cross.png"

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}><img src={cerrar}/></button>
        {children}
      </div>
      <div>

      </div>
    </div>
    
  );
};

export default Modal;
