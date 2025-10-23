/* PARA COMENZAR UN PROYECTO 

1- abrimos la terminal y creamos la carpeta 
abrimos vite npm create vite@latest
projet name = nombre del proyecto 

package name lo mismo que el nombre de proyecto 

luego react 

se comienzan a realizar la instalacion de las dependencias 

npm run dev (para comenzar a correr el proyecto)

vamos a App.jsx

en un gitBash dejar que corra el proyecto y en otro vamos haciendo las instalaciones

eliminamos el index.css

instalamos npm i react-router 
intalamos npm install react-bootstrap bootstrap */


import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Menu from './component/shared/Menu'
import Footer from './component/shared/Footer'
import Home from './component/pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    {/* BrowserRouter se usa porque utilizamos Bootstrap Router por las rutas */}
    <Menu></Menu>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* aca llamamos a todos los componentes como Home, login, Nosotros, Contacto  */}
      </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
