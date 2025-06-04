import { EstiloGlobal } from "./Style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Usuarios from "./pages/Usuarios";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
