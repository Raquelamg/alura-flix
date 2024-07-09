import React, { useEffect, useState, useRef, useContext } from 'react';
import FrontEnd from './components/FrontEnd/FrontEnd';
import BackEnd from 'components/BackEnd/Index';
import styles from "./App.module.css";
import Innovacion from 'components/Innovacion/Index';
import Modal from 'components/Editar/Index';
import { PaginaContext } from 'contexto/nuevaPagina';  // Asegúrate de ajustar la ruta correctamente

function App() {
    const { videos, setVideos } = useContext(PaginaContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const titleRef = useRef();
    const categoryRef = useRef();
    const imageRef = useRef();
    const videoRef = useRef();
    const descriptionRef = useRef();

    const handleEditClick = (video) => {
        console.log('editar:' + video);
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSave = () => {
        console.log('handleSave')
        const updatedVideo = {
            ...selectedVideo,
            titulo: titleRef.current.value,
            categoria: categoryRef.current.value,
            imagen: imageRef.current.value,
            video: videoRef.current.value,
            descripcion: descriptionRef.current.value,
        };

        const updatedVideos = videos.map(video =>
            video.id === updatedVideo.id ? updatedVideo : video
        );

        setVideos(updatedVideos);
        handleCloseModal();
    };

    const handleClear = () => {
        titleRef.current.value = '';
        categoryRef.current.value = '';
        imageRef.current.value = '';
        videoRef.current.value = '';
        descriptionRef.current.value = '';
    };

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

    const eliminarVideo = (id) => {
        console.log("eliminarVideo", id);
        const nuevosVideos = videos.filter((video) => video.id !== id);
        setVideos(nuevosVideos);
    };

    const editarVideo = (video) => {
        console.log(video);
        handleEditClick(video);
    };


  

    const manejarCambio = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setSelectedVideo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <>
            <div>
                <div className={styles.frontEnd}>
                    <h1 className={styles.titulo}>FRONT END</h1>
                    <scroll-container>
                    <section className={styles.videosFront}>
                        {videos
                            .filter(video => video.categoria === '3')
                            .map(video => (
                                <FrontEnd
                                    datos={video}
                                    key={video.id}
                                    eliminarVideo={eliminarVideo}
                                    editarVideo={editarVideo}
                                />
                            ))}
                    </section>
                    </scroll-container>
                </div>
                
                <div className={styles.backEnd}>
                
                    <h1 className={styles.tituloBack}>BACK END</h1>
                    <scroll-container>
                   
                    <section className={styles.videosFront}>
                        {videos.filter(video => video.categoria === '1')
                            .map((video) => (
                                
                                <BackEnd
                                    datos={video}
                                    key={video.id}
                                    eliminarVideo={eliminarVideo}
                                    editarVideo={editarVideo}
                                    
                                />
                                
                            ))}
                            
                    </section>
                    
                    </scroll-container>
                </div>
                <div className={styles.backEnd}>
                    <h1 className={styles.tituloInnovacion}>INNOVACION Y GESTION</h1>
                    <scroll-container>
                    <section className={styles.videosFront}>
                        {videos.filter(video => video.categoria === '2')
                            .map((video) => (
                                <Innovacion
                                    datos={video}
                                    key={video.id}
                                    eliminarVideo={eliminarVideo}
                                    editarVideo={editarVideo}
                                />
                            ))}
                    </section>
                    </scroll-container>
                </div>
            </div>
            {showModal && (
                <Modal show={showModal} className={styles.editaCard} onClose={handleCloseModal}>
                    <h2 className={styles.cardTitulo}>EDITA CARD</h2>
                    <label className={styles.textolabel}>Título</label>
                    <input ref={titleRef} type="text" placeholder="Ingrese el título" className={styles.formulario} required defaultValue={selectedVideo.titulo} />
                    <label className={styles.textolabel}>Categoria</label>
                    <select ref={categoryRef}  value={selectedVideo.categoria} className={styles.formulario} onChange={manejarCambio}  name="categoria" >
                    <option value="1">BackEnd</option>
                    <option value="2">Innovación y Gestion</option>
                    <option value="3">Front End</option> 
                    </select>
                    
                    <label className={styles.textolabel}>Imagen</label>
                    <input ref={imageRef} type="text" placeholder="El enlace es obligatorio" className={styles.formulario} required defaultValue={selectedVideo.imagen} />
                    <label className={styles.textolabel}>Video</label>
                    <input ref={videoRef} type="text" placeholder="Ingrese el enlace del video" className={styles.formulario} required defaultValue={selectedVideo.video} />
                    <label className={styles.textolabel}>Descripción</label>
                    <input ref={descriptionRef} type="text" placeholder="¿De qué se trata el video?" className={styles.formularioDescripcion} required defaultValue={selectedVideo.descripcion} />
                    <div className={styles.botones}>
                        <button className={styles.boton} onClick={handleSave}>GUARDAR</button>
                        <button className={styles.boton} onClick={handleClear}>LIMPIAR</button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default App;
