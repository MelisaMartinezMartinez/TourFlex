import ExperienceList from "../../components/experienceList/ExperienceList"
import Favorite from "../../components/favorite/Favorite"
import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle"> Buscar por tipo de experiencia</h1>
          <ExperienceList />
          <h1 className="homeTitle"> Experiencias favoritas</h1>
          <Favorite />
        </div>
    </div>
  )
}

export default Home