import React from 'react';
import Search from '../../components/Search';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import './home.css'
import indeximage from '../../assets/indexImage.svg'
import indeximage2 from '../../assets/indexImage2.svg'
import './home.css';
import { Menu } from '../../components/Menu';
import CarrosselItens from '../../components/CarrosselItens';
import { redirect, useNavigate } from 'react-router-dom';
import Loja from '../Loja/loja';


function Home() {
   const navigate = useNavigate()
   const redirecionar = () => {
     navigate('/loja')
   }

   return (
      <>
         <div>
            <header>
               <input
                  type="text"
                  placeholder="Procure seus produtos..."
                  onClick={redirecionar}
                  className="Search-bar"
               />
               <Menu />
            </header>
            <br></br>
         </div>
         <div className="body">
            <main>
               <img className='indexImage' src={indeximage} draggable='false'></img>
            </main>
         </div>
         <br></br>
         <div className='container'>
            <div className='textHome'>
               Bem-vindo à InforHome, o seu destino<br></br>definitivo para todas as suas necessidades<br></br>tecnológicas e de casa!<br></br>Estamos empolgados por você estar aqui<br></br>e ansiosos para mostrar tudo o que nossa<br></br>loja tem a oferecer.

               <br></br><br></br>Na InforHome, acreditamos que a tecnologia<br></br>deve tornar sua vida mais fácil e mais divertida.<br></br>É por isso que oferecemos uma ampla gama<br></br>de produtos eletrônicos, dispositivos<br></br>inteligentes para casa, eletrodomésticos<br></br>e muito mais.

            </div>
            <img src={indeximage2} className='indexImage2'></img>
         </div>
         <br></br>
         <div className='carrossel'>
            <h1 className='h1Car'>Navegue Pelas Categorias <FontAwesomeIcon icon={faCartShopping} size="sm" style={{ color: "#000000", }} /></h1>
            <CarrosselItens />
         </div>
         <br></br>
         <br></br>
         <Footer />
      </>
   );
}

export default Home;
