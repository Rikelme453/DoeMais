
import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Loja from './pages/Loja/loja'
import Home from './pages/Home/home'
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/login/Login'
import Carrinho from './pages/carrinho/Carrinho'



export default function(){
    return(
        <BrowserRouter>
           <Routes>
             <Route path = "/loja" element = {<Loja />} />
             <Route path = "/"  element = {<Home />} />
             <Route path = "/cadastro"  element = {<Cadastro />} />
             <Route path = "/login"  element = {<Login />} />
             <Route path='/carrinho' element = {<Carrinho />} />
           </Routes>
        </BrowserRouter>
 
    );
  }

