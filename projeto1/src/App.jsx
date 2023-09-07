import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Produtos from './Produtos'
import Footer from './Footer'
import Sobre from './Sobre'

function App() {

  return (
    <>
  
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/produtos' element={<Produtos />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
