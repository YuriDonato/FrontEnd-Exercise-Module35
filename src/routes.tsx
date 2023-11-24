import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italian" element={<Perfil comida="Italiana" />} />
    <Route path="/sushi" element={<Perfil comida="Sushi" />} />
  </Routes>
)

export default Rotas
