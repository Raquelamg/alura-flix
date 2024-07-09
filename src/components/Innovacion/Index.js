import styles from "./Innovacion.module.css"
import eliminar from "./eliminar.png"
import editar from "./editar.png"


const Innovacion = ({ datos, eliminarVideo, editarVideo }) => {
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
        <button className={styles.iconoBotonEliminar} onClick={() => eliminarVideo(datos.id)}><img src={eliminar}/></button>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar} className={styles.iconoBotonEditar}  onClick={() => editarVideo(datos)}/>
      <span className={styles.iconoEditar} >EDITAR</span>
      </div>
    );
  };
  
  export default Innovacion;

/*function Innovacion(){
    return(
        <>
        <div className={styles.innovacion}>
        <h1 className={styles.titulo}>INNOVACION Y GESTION</h1>
        <section className={styles.videosInnovacion}>
        <div className={styles.videos} >    
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/vhwspfvI52k?si=-QqQi18BFLS3pvT6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>
        
        
        </div>
        
        <div className={styles.videos} >
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/YhR7Zp8NUzE?si=_QbnXRc8gpMxy-sW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>

        </div>
        <div className={styles.videos} >
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/6N3OkLCfK-0?si=h_KTD-RexUU9aNlm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.icono} src={eliminar}/>
        <span className={styles.iconoEliminar} >BORRAR</span>
        <img  src={editar}/>
        <span className={styles.iconoEditar} >EDITAR</span>

        </div>
      
        </section>
        </div>
        </>
    )
}

export default Innovacion;
*/