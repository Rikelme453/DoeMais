import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  item1 from'../assets/itens/1.svg'
import  item2 from'../assets/itens/2.svg'
import  item3 from'../assets/itens/3.svg'
import  item4 from'../assets/itens/4.svg'
import  item5 from'../assets/itens/5.svg'
import  item6 from'../assets/itens/6.svg'
import  item7 from'../assets/itens/7.svg'
import  item8 from'../assets/itens/8.svg'
import  item9 from'../assets/itens/9.svg'
import  item10 from'../assets/itens/10.svg'
import  item11 from'../assets/itens/11.svg'
import './CarrosselItens.css'

const CarrosselItens = () => {
  return (
    <div className='carrossel-container'>
      <Carousel 
      showThumbs={false}
      infiniteLoop={true}
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={100/7}
      showIndicators={false}
      autoPlay={true}
      interval={2000}
      showStatus={false}
      stopOnHover={true}
    >
      <div>
          <img className='carousel-item' src={item1} alt="Item 1" />
        </div>
        <div>
          <img className='carousel-item' src={item2} alt="Item 2" />
        </div>
        <div>
          <img className='carousel-item' src={item3} alt="Item 3" />
        </div>
        <div>
          <img className='carousel-item' src={item4} alt="Item 4" />
        </div>
        <div>
          <img className='carousel-item' src={item5} alt="Item 5" />
        </div>
        <div>
          <img className='carousel-item' src={item6} alt="Item 6" />
        </div>
        <div>
          <img className='carousel-item' src={item7} alt="Item 7" />
        </div>
        <div>
          <img className='carousel-item' src={item8} alt="Item 8" />
        </div>
        <div>
          <img className='carousel-item' src={item9} alt="Item 9" />
        </div>
        <div>
          <img className='carousel-item' src={item10} alt="Item 10" />
        </div>
        <div>
          <img className='carousel-item' src={item11} alt="Item 11" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarrosselItens;