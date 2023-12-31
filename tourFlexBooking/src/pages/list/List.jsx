import "./list.css";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Buscar</h1>
            <div className="listItem">
              <label>Destinos</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Fecha entrada</label>
              <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>}
            </div>
            <div className="listItem">
              <label>Opciones</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">Valor mas bajo<small> por noche</small></span>
                  <input type="number" className="listOptionInput"/>
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Valor mas alto<small> por noche</small></span>
                  <input type="number" className="listOptionInput"/>
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adultos</span>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.adult}/>
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Niños</span>
                  <input type="number" min={0} className="listOptionInput" placeholder={options.children}/>
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Habitaciones</span>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button>Buscar</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List