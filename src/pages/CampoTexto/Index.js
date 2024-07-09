
import { useState } from "react"
import styles from "./CampoTexto.css"

const CampoTexto = (props) => {
    
   

    const manejarCambio = (e) => {
      
        props.actualizarValor(e.target.value)
    }



    return <div className={styles.cuestionario}>
    <label className="textolabel" >{props.titulo}</label>
    <input  
    placeholder={props.placeholder} 
    className="formulario" 
    value={props.valor} 
    onChange={manejarCambio}
    
    />
    
    
    </div>
}

export default CampoTexto;