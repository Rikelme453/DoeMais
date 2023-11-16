import React from 'react'
import { useEffect, useState } from "react"
import Footer from '../../components/footer';
import Search from '../../components/Search';




const url = 'http://127.0.0.1:8000/api/v1';


function Loja() {
  const [data, setData] = useState([])
  const [filtName, setFiltName] = useState('');
  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    const endpoint = `${url}`

    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      })

      const data = await response.json()
      console.log(data)
      setData(data)
    }
    catch (e) {
      console.log(e)
    }

  }
  return (
    <>

      <div>
        <header>
    
          <Search />
        </header>
        <body></body>
      </div>
      <Footer />
    </>

  )
}
export default Loja;