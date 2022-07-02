
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../page/home"
import Contactos from "../page/contactos"
import Productos from "../page/productos"
import Navbar from "../components/navabar"
import Footer from '../components/footer';


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contactos' element={<Contactos />} />
          <Route path='/Productos' element={<Productos />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}
export default AppRouter