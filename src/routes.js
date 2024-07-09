import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie/Index";

import Container from "components/container/Index";
import NuevaPagina from "pages/nuevaPagina/Index";
import Inicio from "pages/Inicio/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Editar from "components/Editar/Index";


function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecera/>
        <Container>
                <Routes>
            <Route path="/" element={<Inicio/>} ></Route>
            <Route path="/nuevaPagina" element={<NuevaPagina/>}></Route>
            <Route path="/Editar" element={<Editar/>}></Route>
        </Routes>
        </Container>
        <Pie/>
        </BrowserRouter >
    )
}

export default AppRoutes;