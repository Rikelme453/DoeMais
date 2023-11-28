import React, { useEffect, useState, useRef } from "react";
import './Search.css';
import '../pages/Loja/loja.css'
import { Menu } from './Menu';


function Search({ onClick }) {
  const url = 'http://127.0.0.1:8000/api/v1produtos/';

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filtName, setFiltName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchWrapperRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [text]);

  
  const fetchData = async () => {
    const endpoint = `${url}?nome=${text}`;

    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      });

      const data = await response.json();
      setData(data);
    } catch (e) {
    }
  };

  const searched = (event) => {
    setFiltName(event.target.value);
    setText(event.target.value);
    setShowSuggestions(true);
  };

  const handleItemClick = (value) => {
    setFiltName(value);
    setShowSuggestions(false);
  };

  const itensFilt = data.filter(item =>
    item.nome.toLowerCase().includes(filtName.toLowerCase())
  );

  return (
    <>
      <div className="APP" ref={searchWrapperRef}>
        <input
          type="text"
          placeholder="Procure por campanhas"
          value={filtName}
          onChange={searched}
          onClick={onClick}
          className="Search-bar"
          
        />
        {showSuggestions && (
          <div className="sugestoes">
            <ul>
              {filtName.length > 0 &&
                itensFilt &&
                itensFilt.map(el => (
                  <li
                    key={el.id_produto}
                    onClick={() => handleItemClick(el.nome)}
                    className="listas"
                  >
                    <div className="nomeProduto">{el.nome}</div> <div className="produtoSearch"><img src={el.image}  height="25px"/></div>
                  </li>
                ))}
            </ul>
          </div>
        )}
        <header>
          <Menu />
        </header>
        


            <section className='produto-section'>
              {
               itensFilt &&
               itensFilt.map(el => <div className='ProdutoDiv' key={el.id_publicao}>
                  <img className='imagem' src={el.image}></img>

                  <h4 className='Nome'>{el.nome}</h4>
                  <p>{el.texto_explicativo}</p>

                </div>)}
            </section>
  


      </div>

    </>
  );
}

export default Search;
