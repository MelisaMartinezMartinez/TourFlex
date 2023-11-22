import "./tour.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation } from "@fortawesome/free-solid-svg-icons"


const Tour = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="tourContainer">
        <div className="tourWrapper">
          <h1 className="tourTitle">Senderismo</h1>
          <div className="tourAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Montañas de Colombia - Eje Cafetero</span>
          </div>
          <span className="tourDistance">
            Lugar en medio de la naturaleza
          </span>
          <span className="tourPriceHighlight">
            Reserva este tour a un precio increible el cual incluye el transporte al lugar
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tour