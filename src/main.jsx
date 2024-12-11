import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EquipoFavorito } from './pages/EquipoFavorito.jsx'
import { Equipoid } from './pages/Equipoid.jsx'
import { Verequipos } from './pages/Verequipos.jsx'
import { Home } from './pages/Home.jsx'
import { Equipo } from './components/Equipo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/equipoFavorito",
    element: <EquipoFavorito/>
  },
  {
    path: "/equipos/:id",
    element: <Equipoid/>
  },
  {
    path: "/equipo",
    element: <Equipo/>
  },
  {
    path: "/equipos",
    element: <Verequipos/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
