const Pagination = ({ getData, prev, next }) => {
  return (
    <div className="mt-12 text-slate-900">
        {
            prev ?
            <button onClick={() => getData(prev)} className="py-1 px-3 mr-1 inline-block font-semibold outline-yellow-500 hover:underline">Anterior</button>
            :
            null
        }
        {
            next ?
            <button onClick={() => getData(next)} className="py-1 px-3 ml-1 inline-block font-semibold outline-yellow-500 hover:underline">Siguiente</button>
            :
            null
        }
    </div>
  )
}

export default Pagination