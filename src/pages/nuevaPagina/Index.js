import React, { useState, useContext, useEffect } from 'react';
import { PaginaContext } from 'contexto/nuevaPagina'; 
import Boton from 'components/Boton/Index';
import styles from './nuevaPagina.module.css';
import CampoTexto from 'pages/CampoTexto/Index';
import ListaOpciones from 'pages/Lista opciones/Index';

const NuevaPagina = () => {
    const [titulo, setTitulo] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const { videos, setVideos } = useContext(PaginaContext);

    useEffect(() => {
        if (videos.length === 0) {
            fetch("https://my-json-server.typicode.com/Raquelamg/alura-flix-api/videos")
                .then(response => response.json())
                .then(data => {
                    setVideos(data);
                })
                .catch(error => console.error('Error fetching videos:', error));
        }
    }, [videos, setVideos]);

    const manejarEnvio = (e) => {
        e.preventDefault();

        let obj = { titulo: titulo, imagen: imagen, categoria: categoria, video: video, descripcion: descripcion };
        console.log('Objeto enviado:', obj);

        fetch('https://my-json-server.typicode.com/Raquelamg/alura-flix-api/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setVideos(prevVideos => [...prevVideos, data]);
        })
        .catch(error => console.error('Error posting video:', error));
        limpiarFormulario();
        alert('Video guardado')
    };

    const limpiarFormulario = () => {
        setTitulo('');
        setImagen('');
        setCategoria('');
        setVideo('');
        setDescripcion('');
    };

    return (
        <section className={styles.nuevoVideo}>
            <form onSubmit={manejarEnvio}>
                <h1 className={styles.titulo}>NUEVO VIDEO</h1>
                <h2 className={styles.texto}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
                <h3 className={styles.texto2}>Crear Tarjeta</h3>

                <div className={styles.cuestionario}>
                    <div className={styles.cuestionario2}>
                        <CampoTexto 
                            titulo="Título" 
                            placeholder="Ingrese el título" 
                            required 
                            valor={titulo} 
                            actualizarValor={setTitulo} 
                        />
                        <CampoTexto 
                            titulo="Imagen" 
                            placeholder="Ingrese el enlace de la imagen" 
                            required
                            valor={imagen} 
                            actualizarValor={setImagen} 
                        />
                    </div>
                    <div className={styles.cuestionario2}>
                        <ListaOpciones 
                            valor={categoria}
                            actualizarCategoria={setCategoria} 
                        />
                        <CampoTexto 
                            titulo="Video" 
                            placeholder="Ingrese el enlace del video" 
                            required
                            valor={video} 
                            actualizarValor={setVideo} 
                        />
                    </div>
                </div>
                <div className={styles.cuestionario2}>
                    <CampoTexto 
                        titulo="Descripcion" 
                        placeholder="¿De qué se trata el video?" 
                        required
                        valor={descripcion} 
                        actualizarValor={setDescripcion} 
                    />
                </div>
                <div className={styles.botones}>
                    <Boton />
                    <button type="button" className={styles.boton} onClick={limpiarFormulario}>LIMPIAR</button>
                </div>
            </form>
        </section>
    );
};

export default NuevaPagina;
