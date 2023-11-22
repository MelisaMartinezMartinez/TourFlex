import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/trekking-forest_53876-28.jpg?size=626&ext=jpg&ga=GA1.1.1015084916.1700618474&semt=sph" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Colombia</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/cyclist-sunny-day-bike-adventure-travel-photo_1150-7513.jpg?size=626&ext=jpg&ga=GA1.1.1015084916.1700618474&semt=sph" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Brazil</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1015084916.1700618474&semt=sph" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Costa Rica</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured