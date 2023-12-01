import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Cadastro.css';

function Cadastro() {
  const url = "http://127.0.0.1:8000/api/v2usuarios/";
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (nome === "" || idade === "" || email === "") {
        Swal.fire({
          title: 'Erro',
          text: 'Campos do formulário vazio, por favor preencha-os',
          icon: 'warning'
        });
        return;
      } else if (senha.length <= 8 && !senha.match(/[@#$%&;*][a-z][0123456789]+/)) {
        Swal.fire({
          title: 'Atenção',
          text: 'Senha Fraca. Busque criar uma senha forte com letras, caracteres especiais e números, tendo pelo menos 8 elementos',
          icon: 'warning'
        });
        return;
      } else {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeUser: nome,
            emailUser: email,
            senhaUser: senha,
            idadeUser: idade,
          }),
        });

        if (response.ok) {
          Swal.fire({
            title: 'Cadastrado',
            text: 'Cadastro efetuado com sucesso!!',
            icon: 'success'
          });
          navigate('/Login')
        } else {
          console.error(`HTTP error! Status: ${response.status}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
         <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.min.css" />

          <title>Document</title>
        </head>
           
      <div>
          <a id="navText" className="navbar-brand" href="/">DOE MAIS</a>
    

        <form className="cadastro">
          <br />
          <br />
          <br />
          <h2>Cadastro</h2>
          <input
            id="input1"
            className="form-control-sm form-control-lg"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={handleChangeNome}
          />
          <br />
          <br />
          <input
            id="input2"
            className="form-control-sm form-control-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <br />
          <br />
          <input
            id="input3"
            className="form-control-sm form-control-lg"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={handleChangeSenha}
          />
          <br />
          <br />
          <input
            id="input4"
            className="form-control-sm form-control-lg"
            type="text"
            placeholder="Idade"
            value={idade}
            onChange={handleChangeIdade}
          />
          <br />
          <br />
          <button
            id="btn"
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        </form>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

      </div>
    </>
  );
}

export default Cadastro;