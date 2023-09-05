import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Footer from './Footer'


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Produtos/>}/>
          <Route path='/' element={<Sobre/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
