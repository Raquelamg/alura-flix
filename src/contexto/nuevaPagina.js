import React, { createContext, useState, useContext } from 'react';

export const PaginaContext = createContext()

PaginaContext.displayName = "NuevaPagina"

export default function PaginaProvider({ children }){
    const [videos, setVideos] = useState([]);
    
    return <PaginaContext.Provider value={{ videos, setVideos }}>
        {children}

    </PaginaContext.Provider>
}




export function usePaginaContext(){
    const {video, setVideo}= useContext(PaginaContext)

    function agregarVideo(nuevoVideo){
        const videoRepetido= video.some(item=>nuevoVideo.id

        );
        let nuevaLista=[...video]
        if(!videoRepetido){
            nuevaLista.push(nuevoVideo)
            return setVideo(nuevaLista)
        }

        nuevaLista = video.filter(item=> item.id !== nuevoVideo.id)
        return setVideo(nuevaLista)
    }
    return{video, agregarVideo}
}