import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://img.freepik.com/free-photo/standing-mountain-peak-backpacker-enjoys-solitude-generated-by-ai_188544-54254.jpg?size=626&ext=jpg&ga=GA1.1.1015084916.1700618474&semt=sph" alt="" className="searchItemImg"/>
        <div className="searchItemDescription">
            <h1 className="searchItemTitle">Aventura en las montañas</h1>
            <span className="searchItemDistance">Duracion: 4 horas</span>
            <span className="searchItemTransportation">Transporte gratis al lugar</span>
            <span className="searchItemSubtitle">Incluye avistamiento de cascadas</span>
            <span className="searchItemFeatures">Descubre la montaña en una emocionante jornada llena de senderismo</span>
            <span className="searchItemCancelOpt">Cancelación gratuita</span>
            <span className="searchItemCancelOptSubtitle">Reserva ahora y paga despues</span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>9.2</button>
            </div>
            <div className="searchItemDetailsText">
                <span className="searchItemPrice">$200</span>
                <span className="searchItemTaxOpt">Incluye impuestos y cargos adicionales</span>
                <button className="searchItemCheckButton">Ver disponibilidad</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem