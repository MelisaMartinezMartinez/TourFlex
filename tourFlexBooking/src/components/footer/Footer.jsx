import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerLists">
            <ul className="footerList">
                <li className="footerListItem">Paises</li>
                <li className="footerListItem">Regiones</li>
                <li className="footerListItem">Ciudades</li>
                <li className="footerListItem">Aeropuertos</li>
                <li className="footerListItem">Hoteles</li>
            </ul>
            <ul className="footerList">
                <li className="footerListItem">Casas</li>
                <li className="footerListItem">Apartamentos</li>
                <li className="footerListItem">Villas</li>
                <li className="footerListItem">Albergues</li>
                <li className="footerListItem">Hostales</li>
            </ul>
            <ul className="footerList">
                <li className="footerListItem">Lugares únicos</li>
                <li className="footerListItem">Todos los destinos</li>
                <li className="footerListItem">Destinos de vuelos</li>
                <li className="footerListItem">Opiniones</li>
                <li className="footerListItem">Descubre más</li>
            </ul>
            <ul className="footerList">
                <li className="footerListItem">Buscador de vuelos</li>
                <li className="footerListItem">Alquiler carros</li>
                <li className="footerListItem">Restaurantes</li>
                <li className="footerListItem">Agentes de viaje</li>
                <li className="footerListItem">Reviews Awards</li>
            </ul>
        </div>
        <div className="footerText">Copyright © 2023 tourFlexBooking.com™. Todos los derechos reservados.</div>
    </div>
  )
}

export default Footer