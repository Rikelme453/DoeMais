import React from 'react'
import './Cadastro.css';


const Cadastro = () => {

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
          <form className="cadastro" method='GET' action='#'>
            <h2>Cadastro</h2>
            <input className='form-control' name='nome' type="name" placeholder='Informe Seu Nome' required /><br />
            <input className='form-control'  name='email' type="email" placeholder='Informe Seu Email' required /><br />
            <input className='form-control'  name='senha' type="password" placeholder='Informe Sua Senha' required /><br />
            <input className='form-control' name='idade' type="number" placeholder='Informe Sua Idade' required/><br />
            <button className='btn btn-primary' type='submit'>Cadastrar-se</button>
          </form>

        </body>
      </html>



    </>
  )

}

export default Cadastro