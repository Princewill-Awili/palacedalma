import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Acqua from "./pages/Acqua/Acqua";
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
          <Route exact path='/acqua' element={<Acqua />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
