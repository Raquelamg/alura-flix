import styles from "./Banner.module.css"

function Banner({img}){
    return(
        <div className={styles.capa} style={{backgroundImage: `url("/img/banner-${img}.png")` }}>
          
            <div className={styles.react}>
                <h1 className={styles.front} >Front End</h1>
            <h2 className={styles.texto} >Challenge React</h2>
            <h3 className={styles.textoReact}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</h3>
            </div>
            
             <iframe className={styles.video} width="647.79px;" height="333.58px" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=XTyNAGSOBAxb76gW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            

        </div>
    )
}

export default Banner;