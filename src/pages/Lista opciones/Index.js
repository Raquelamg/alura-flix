//import "./ListaOpciones.css"

const ListaOpciones = (props) => {

  

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    };
    return <div className="lista-opciones">

        <label className="textolabel">Categoria</label>
        <select value={props.valor} className="formulario" onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" hidden>Selecciona la categoria</option>
                    <option value="1">BackEnd</option>
                    <option value="2">Innovación y Gestion</option>
                    <option value="3">Front End</option> 
                    
                   </select>
    </div>
}

export default ListaOpciones;