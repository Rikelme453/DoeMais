import React from 'react'
import { useEffect, useState } from "react"
import './Login.css';


function Login(onClick ){
  const url = 'http://127.0.0.1:8000/api/v2usuarios/'
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
    setSenha(event.target.value);
  };

   const handleSubmit = async ()=>{
    try{
      if(email && senha == data){
        alert("Se lascou boy")
      }else{
        alert("Deu certo boy")
      }
     
    }catch{

    }
  }
   
  
  /*function login(event){
    
    event.preventDefault();
     
    
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify({emailUser: this.emailUser.value, senhaUser: this.senhaUser.value}),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch(url, requestInfo)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                console.log(response);
                throw new Error('Usuário ou senha inválidos, tente novamente');
            }
        })
      }*/

  return (

    <>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
          <title>Document</title>
        </head>
        <body>
          <header>
          <a id="navText" className="navbar-brand" href="/">INFOR HOME</a>
          </header>
          <form className="login" method='POST' action='#'>
            <br /><br /><br />
            <h2>Login</h2>
            <input id="input" className='form-control-sm form-control-lg' type="email" placeholder='Informe Seu Email' value={email} onChange={handleChange} /><br /><br />
            <input  id="input"  className='form-control-sm form-control-lg' type="password" placeholder='Informe Sua Senha' value={senha} onChange={handleChange}/><br /><br />
            <button id ="btn" className='btn btn-primary' type ="submit" onClick={handleSubmit}>Entrar</button>
          </form>
         
        </body>
      </html>



    </>
  )

}

export default Login