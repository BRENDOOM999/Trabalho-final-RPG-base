import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";


import FichasFinais from "./pages/fichafinal/FichasFinais";

import NomeReC from "./pages/nomeReC/NomeReC";
import NomeReCLista from "./pages/nomeReC/NomeReCLista";

import Atributos from "./pages/atributos/Atributos";
import AtributosLista from "./pages/atributos/AtributosLista";

import ProficienciaseIdiomas from "./pages/proficienciaseidiomas/ProficienciaseIdiomas";
import ProficienciaseIdiomasLista from "./pages/proficienciaseidiomas/ProficienciaseIdiomasLista";

import Equipamento from "./pages/equipamentos/Equipamento";
import EquipamentoLista from "./pages/equipamentos/EquipamentoLista";

import Caracteristicas from "./pages/caracteristicas/Caracteristicas";
import CaracteristicasLista from "./pages/caracteristicas/CaracteristicasLista";

import Historia from "./pages/historia/Historia";
import HistoriaLista from "./pages/historia/HistoriaLista";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>

            <Route path="/nomeReC" element={<NomeReCLista />} />
            <Route path="/nomeReC/:id" element={<NomeReC />} />
            <Route path="/nomeReC/create" element={<NomeReC />} />

            <Route path="/atributos" element={<AtributosLista />} />
            <Route path="/atributos/:id" element={<Atributos />} />
            <Route path="/atributos/create" element={<Atributos />} />
            
            <Route path="/proficienciaseidiomas" element={<ProficienciaseIdiomasLista />} />
            <Route path="/proficienciaseidiomas/:id" element={<ProficienciaseIdiomas />} />
            <Route path="/proficienciaseidiomas/create" element={<ProficienciaseIdiomas />} />

            <Route path="/equipamento" element={<EquipamentoLista />} />
            <Route path="/equipamento/:id" element={<Equipamento />} />
            <Route path="/equipamento/create" element={<Equipamento />} />

            <Route path="/caracteristicas" element={<CaracteristicasLista />} />
            <Route path="/caracteristicas/:id" element={<Caracteristicas />} />
            <Route path="/caracteristicas/create" element={<Caracteristicas />} />

            <Route path="/historia" element={<HistoriaLista />} />
            <Route path="/historia/:id" element={<Historia />} />
            <Route path="/historia/create" element={<Historia />} />

            <Route path="/fichasfinais" element={<FichasFinais />} />
            <Route path="/fichasfinais/:id" element={<FichasFinais />} />

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
