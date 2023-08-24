import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage/LandingPage";
import Acqua from "./pages/Acqua/Acqua";
import Rooftop from "./pages/Rooftop/Rooftop";
import Luce from "./pages/Luce/Luce";
import Hotel from "./pages/Hotel/Hotel";
import AcquaX from "./pages/AcquaX/AcquaX";
import LuceX from "./pages/LuceX/LuceX";
import RoofX from "./pages/RoofX/RoofX";
import HotelX from "./pages/HotelX/HotelX";
import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

export const MyContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("home");
  const [load, setLoad] = useState(false);
  const [exp, setExp] = useState(false);

  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = () => {
    setLoad(true);
    setTimeout(() => setLoad(false), 3000);
  };

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
          exp,
          setExp,
          cart,
          setCart,
          openCart,
          setOpenCart,
        }}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/acqua' element={<Acqua />} />
          <Route path='/rooftop' element={<Rooftop />} />
          <Route path='/luce' element={<Luce />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/acqua/experience' element={<AcquaX />} />
          <Route path='/rooftop/experience' element={<RoofX />} />
          <Route path='/luce/experience' element={<LuceX />} />
          <Route path='/hotel/experience' element={<HotelX />} />
          <Route path='/home/experience' element={<LandingPage />} />
        </Routes>
        {load && <Loader />}
      </MyContext.Provider>
    </div>
  );
}

export default App;
