import React, { useState } from 'react'
import './Menu.css';
import App from '../App';
import Home from '../pages/Home/home';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Login from '../pages/login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Loja from '../pages/Loja/loja';
import Carrinho from '../pages/carrinho/Carrinho';
import MenuSub from './MenuSub';

export const Menu = () => {

    const [menuHamburguer, setMenuHamburguer] = useState(0)

    const aparecer = () => {
        setMenuHamburguer(1)
    }

    const desaparecer = () => {
        setMenuHamburguer(2)
    }

    const desaparecer2 = () => {
        setMenuHamburguer(2)
    }

    return (
        <>
            <div className="body"></div>
            <button onClick={desaparecer} className={menuHamburguer == 1 ? 'fechar' : 'fehar-sem'}>X</button>
            <div className={menuHamburguer === 0 ? 'Hamburguer' : menuHamburguer === 1 ? 'HamburguerDiv' : 'HamburguerDiv-fechar'}>
                <p className='saudacao'>Olá USER</p>

                <MenuSub />
            </div>
            <div className={menuHamburguer == 1 ? 'overflow' : 'overflow-sem'} onClick={desaparecer2}></div>

            <div className="header">
                <a id="navText" className="navbar-brand" href="/" element={< Home />}>INFOR HOME</a>
                <ul className="suggestions">
                    <div className="lupa_div">
                        <FontAwesomeIcon icon={faSearch} className='lupa' />
                    </div>
                </ul>
                <FontAwesomeIcon icon={faUser} className='user' />
                <p className="navPg">Seja Bem-vindo!</p>
                <div className="link">
                    <a href="/login" element={<Login />} >Entrar | </a>
                    <a href="/cadastro" element={<Cadastro />} >Cadastrar</a>
                </div>
                <a href="/carrinho" element={<Carrinho />}>
                    <FontAwesomeIcon icon={faCartShopping} className='cart' />
                </a>
            </div>
            <div className="SubNav">
                <a href="#" onClick={aparecer}>Categorias<FontAwesomeIcon icon={faBars} className='cat' /></a>
                <a href="/carrinho" element={<Carrinho />}>Carrinho</a>
                <a href="/loja" element={<Loja />} >loja</a>
                <a href="#">Contato</a>
                <a href="#">Quem Somos?</a>
            </div>
        </>
    )
}