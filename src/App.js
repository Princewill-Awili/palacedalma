import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage/LandingPage";
import Acqua from "./pages/Acqua/Acqua";
import Rooftop from "./pages/Rooftop/Rooftop"
import Luce from "./pages/Luce/Luce";
import Hotel from "./pages/Hotel/Hotel";
import AcquaX from "./pages/AcquaX/AcquaX";
import LuceX from "./pages/LuceX/LuceX";
import RoofX from "./pages/RoofX/RoofX";
import HotelX from "./pages/HotelX/HotelX"
import { useState, createContext, useEffect } from "react";
import { Route,Routes } from "react-router-dom";

export const MyContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("home");
  const [load, setLoad] = useState(false);
  const [modeX, setModeX] = useState(false);

  useEffect(()=>{
    initialLoad();
  },[]);

  const initialLoad = () => {
    setLoad(true);
    setTimeout(()=> setLoad(false),3000);
  }

  console.log("ModeX:",modeX);

  return (
    <div className='App'>
      <MyContext.Provider
        value={{
          showMenu,
          setShowMenu,
          mode,
          setMode,
          load,
          setLoad,
          modeX,
          setModeX,
        }}
      >
        {modeX === false && <Navbar />}
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<LandingPage />} />
          <Route exact path='/acqua' element={<Acqua />} />
          <Route exact path='/rooftop' element={<Rooftop />} />
          <Route exact path='/luce' element={<Luce />} />
          <Route exact path='/hotel' element={<Hotel />} />
          <Route exact path='/acqua/experience' element={<AcquaX />} />
          <Route exact path='/rooftop/experience' element={<RoofX />} />
          <Route exact path='/luce/experience' element={<LuceX />} />
          <Route exact path='/hotel/experience' element={<HotelX />} />
          <Route exact path='/home/experience' element={<LandingPage />} />
        </Routes>
        {load && <Loader />}
      </MyContext.Provider>
    </div>
  );
}

export default App;
