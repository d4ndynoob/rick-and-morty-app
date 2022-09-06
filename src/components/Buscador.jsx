import { useState } from 'react'

const Buscador = ({ getData }) => {
    const [nombre, setNombre] = useState("")

    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`

  return (
    <div className="w-full text-lg flex justify-evenly mt-5 xl:w-3/4">
      <input
        type="text"
        placeholder="Buscar personaje"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value)

          if(e.target.value == "") {
            getData()
          }
        }}
        className="outline-none w-4/6 px-3 py-1 rounded-lg border-2 border-black/20 focus:border-cyan-600 focus:shadow-lg capitalize"
      />
      <button
        className="w-min bg-cyan-600 px-6 text-slate-100 rounded-lg hover:shadow-lg hover:bg-cyan-500 transition-colors duration-100"
        onClick={() => getData(url)}
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
