import React from 'react';
import Banner from "components/Banner/Index";
import BackEnd from "components/BackEnd/Index";
import Innovacion from "components/Innovacion/Index";
import App from "App";

function Inicio() {

    return (
        <>

            <Banner img="home">
            </Banner>
            <App/>
            <BackEnd />
            <Innovacion />
            

        </>
    );
}

export default Inicio;