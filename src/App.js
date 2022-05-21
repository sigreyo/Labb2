import "./App.css"
import { Routes, Route } from "react-router-dom"
import Portfolio from "./pages/portfolio"
import Home from "./pages/home"
import About from "./pages/about"
import Cv from "./pages/cv"
import Lorem from "./pages/lorem"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Labb2/" element={<Home />} />
        <Route path="/Labb2/about" element={<About />} />
        <Route path="/Labb2/cv" element={<Cv />} />
        <Route path="/Labb2/portfolio" element={<Portfolio />} />
        <Route path="/Labb2/lorem" element={<Lorem />} />
      </Routes>
    </div>
  )
}

export default App
