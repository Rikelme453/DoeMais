import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/face.svg'
import img2 from '../assets/insta.svg'
import img3 from '../assets/twi.svg'
import img4 from '../assets/lin.svg'

function Footer() {
    return (
        <>
            <aside className='aside'></aside>
            <footer>
                <div className="footer">
                    <div className="row">
                        <a href="#"><i><img src={img} alt="" draggable="false" /></i></a>
                        <a href="#"><i><img src={img2} alt="" draggable="false" /></i></a>
                        <a href="#"><i><img src={img3} alt="" draggable="false" /></i></a>
                        <a href="#"><i><img src={img4} alt="" draggable="false" /></i></a>
                    </div>

                    <div className="row">
                        <ul>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Outros Serviços</a></li>
                            <li><a href="#">Política & Privacidade</a></li>
                            <li><a href="#">Termos & Condições</a></li>
                            <li><a href="#">Quem Somos?</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        CME Copyright © 2023 CME - All rights reserved || Designed By: Ruivo
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Footer