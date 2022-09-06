const Characters = ({ characters=[] }) => {
  return (
    <div className="mt-8 flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {
            characters.map((item, index) => (
                <div key={index} className="border-2 border-cyan-600 rounded-lg hover:shadow-xl transition-transform duration-100 hover:scale-[1.02] hover:bg-cyan-600/50 hover:text-white">
                    <img src={item.image} alt="" className="w-full h-auto"/>
                    <div className="p-3 flex flex-col items-start justify-around">
                        <h5 className="font-bold self-center">{item.name}</h5>
                        <p><b>Especie:</b> {item.species}</p>
                        <p><b>Location:</b> {item.location.name}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Characters