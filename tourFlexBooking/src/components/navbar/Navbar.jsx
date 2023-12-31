import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">tourflex</span>
            <div className="navItems">
                <button className="navButton">Regístrate</button>
                <button className="navButton">Inicia Sesión</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar