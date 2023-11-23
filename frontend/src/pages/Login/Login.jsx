import React from 'react';
import './Login.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



function Login(onClick ){
  const url = 'http://127.0.0.1:8000/api/v2usuarios/'
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    const endpoint = `${url}`

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        
      })
   

      const data = await response.json()
      console.log(data)
      setData(data)
    }
    catch (e) {
      console.log(e)
    } 
  }
   
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChange2 = (event) => {
    setSenha(event.target.value);
  };

  //Autenticação do usuário 
   const handleSubmit = async() =>{
    const emailExibir = data.map(({emailUser}) => ({emailUser}))
    const senhaExibir = data.map(({senhaUser})=> ({senhaUser}))
    
    const data2 = JSON.stringify(emailExibir,null,1)
    const data3 = JSON.stringify(senhaExibir,null,1) 
    try {
      const parsedData = JSON.parse(data2);
      const parsedData2 = JSON.parse(data3);


      if (parsedData.some(({emailUser}) => emailUser === email && parsedData2.some(({senhaUser}) => senhaUser === senha))){
        Swal.fire({
          title: 'Seja Bem-Vindo',
          text: 'Credenciais Verificadas',
          icon:'success'
      });
        navigate('/')

    } else {
        Swal.fire({
          title: 'Atenção',
          text: 'É necessário efetuar o cadastro!!',
          icon:'warning'
    });
        navigate('/cadastro')
    }
     
    }catch(error){
      console.error(error);
    }
  }
   
  return (

    <>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.min.css" />

          <title>Document</title>
        </head>
        <body>
          <header>
          <a id="navText" className="navbar-brand" href="/">DOE MAIS</a>
          </header>
          <form className="login" method='POST'>
            <br /><br /><br />
            <h2>Login</h2>
            <input id="input" className='form-control-sm form-control-lg' type="email" placeholder='Informe Seu Email' value={email} onChange={handleChange} aria-required/><br /><br />
            <input  id="input"  className='form-control-sm form-control-lg' type="password" placeholder='Informe Sua Senha' value={senha} onChange={handleChange2} aria-required/><br /><br />
            <button id ="btn" className='btn btn-primary' type ="submit" onClick={handleSubmit}>Entrar</button>
            
          </form>

          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11">
          </script>

        </body>
      </html>
    


    </>
  )

}

export default Login