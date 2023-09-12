import { } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Sobre" element={<Sobre />}/>
      <Route path="/Produtos" element={<Produtos />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App