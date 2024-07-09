import React from "react";
import styles from "./FrontEnd.module.css";
import eliminar from "./eliminar.png";
import editar from "./editar.png";


const FrontEnd = ({ datos, eliminarVideo, editarVideo }) => {
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
      <span className={styles.iconoEditar} >EDITAR</span>
    </div>
  );
};

export default FrontEnd;

/* 
        <div className={styles.frontEnd}>
        <h1 className={styles.titulo}>FRONT END</h1>
        <section className={styles.videosFront}>
        <div className={styles.videos} >    
        <iframe className={styles.video}  width="429.19px" height="260.85px" src="https://www.youtube.com/embed/PztCEdIJITY?si=nl-gDPhuJPTEaEKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> 
        </iframe>    
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} onClick={() => eliminarColaborador(id)} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>
        
        
        </div>
        
        <div className={styles.videos} >
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/GJfOSoaXk4s?si=NRKAkZE7Xvr6Vl8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>

        </div>
        <div className={styles.videos} >
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/rpvrLaBQwgg?si=q_ZOkprxT4L7OUrh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>

        </div>
      
        </section>
        </div>*/