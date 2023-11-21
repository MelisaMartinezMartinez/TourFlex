import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Tour from "./pages/tour/Tour";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tours" element={<List/>}/>
        <Route path="/tours/:id" element={<Tour/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
