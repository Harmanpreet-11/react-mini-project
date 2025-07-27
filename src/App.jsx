import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom'
import "./css/App.css";
import Favorites from "./Pages/Favorites";
import { MovieProvider } from "./context/MovieContext";


const App = () => {

  return (
    <MovieProvider>
      <Navbar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/favourites" element={<Favorites/>}/>
    </Routes>
    </main>
    </MovieProvider>

  )
}

export default App