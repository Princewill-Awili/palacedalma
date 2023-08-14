import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Acqua from "./pages/Acqua/Acqua";
import Rooftop from "./pages/Rooftop/Rooftop"
import Luce from "./pages/Luce/Luce";
import Hotel from "./pages/Hotel/Hotel";
import { useState, createContext } from "react";
import { Route,Routes } from "react-router-dom";

export const MyContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("acqua");

  return (
    <div className='App'>
      <MyContext.Provider value={{ showMenu, setShowMenu, mode, setMode }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<LandingPage />} />
          <Route exact path='/acqua' element={<Acqua />} />
          <Route exact path='/rooftop' element={<Rooftop />} />
          <Route exact path='/luce' element={<Luce />} />
          <Route exact path='/hotel' element={<Hotel />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
