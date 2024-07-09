import React, { useState } from 'react';
import styles from "./BackEnd.module.css"
import eliminar from "./eliminar.png"
import editar from "./editar.png"




const BackEnd = ({ datos, eliminarVideo,editarVideo }) => {


  if (!datos) {
    return null;
  }
  

  return (
   
    <div className={styles.videos}>
      
      <iframe className={styles.video}
        src={datos.video} 
        title={datos.titulo} 
        width="560" 
        height="315" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <button className={styles.iconoBotonEliminar} onClick={() => eliminarVideo(datos.id)}><img src={eliminar}/> </button>
      <span className={styles.iconoEliminar} >BORRAR</span>
      <img  src={editar} className={styles.iconoBotonEditar}  onClick={() => editarVideo(datos)}/>
      <span className={styles.iconoEditar}  >EDITAR</span>
    </div>
    
  );
};



export default BackEnd;

         


