import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">¡Ahorra tiempo, ahorra vida!</h1>
        <span className="mailDescription">Regístrate y te enviaremos las mejores ofertas</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Ingresa tu e-mail" />
            <button>Regístrate</button>
        </div>
    </div>
  )
}

export default MailList