// Componentes
import Navbar from "./components/Navbar";
import Characters from './components/Characters'
import Pagination from './components/Pagination';
import Buscador from './components/Buscador'

// Others
import logo from './assets/logo.png'

// Hooks
import { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  useEffect(() => {
    getData(initialUrl);
  }, [])

  // Funciones
  const getData = async (url = initialUrl) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results)
      setInfo(data.info)

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="bg-slate-50 h-full w-full">
      <Navbar texto="Rick and Morty App" span="Wiki"/>
      <div className="container mx-auto flex flex-col items-center pt-8 pb-14">
        <img src={logo} className="max-w-full px-5"/>
        <Buscador getData={getData}/>
        {
          info ? 
          <Pagination getData={getData} prev={info.prev}  next={info.next}/>
          :
          null
        }
        {
          characters ?
          <Characters characters={characters} />
          :
          <h1 className="text-2xl mt-8 font-bold">No hay resultados</h1>
        }
      </div>
    </div>
  )
}

export default App;
