const Navbar = ({ texto, span }) => {
  return (
    <nav className="bg-blue-100/80 py-3 w-full">
      <div className="container mx-auto">
        <a href="/" className="text-slate-900 uppercase outline-none font-normal text-lg ml-3 lg:ml-8">
          {texto} <span className="text-blue-700 font-semibold">{span}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar