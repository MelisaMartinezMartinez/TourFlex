import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faIcons, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        }})
    }

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faIcons} />
                    <span>Experiencias</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Alojamientos</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Vuelos</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Alquiler Vehiculos</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxis</span>
                </div>
            </div>
            { type !== "list" && 
            <>
                <h1 className="headerTitle">TourFlex: ¡Tu Viaje, Tu Estilo!</h1>
                <p className="headerDescription">TourFlex te invita a explorar el mundo a tu manera. Con nuestra plataforma de reservas de tours, personaliza cada detalle de tu viaje para que se adapte a tu estilo único. Desde destinos emocionantes hasta experiencias a medida, TourFlex hace que cada aventura sea tan única como tú. ¡Descubre la libertad de viajar a tu propio ritmo con TourFlex!</p>
                <button className="headerButton">Inicia Sesión / Regístrate</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faIcons} className="headerIcon"/>
                    <input type="text" placeholder="¿A donde quieres ir?" className="headerSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adultos · ${options.children} niños · ${options.room} habitaciones`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adultos</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Niños</span>
                                <div className="optionCounter">
                                    <button disabled={options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Habitaciones</span>
                                <div className="optionCounter">
                                    <button disabled={options.room<=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                    <button className="headerButton">Buscar</button>
                    </div>
                </div> 
            </>
            }
        </div>
    </div>
  );
};

export default Header