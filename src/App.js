import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useState, createContext } from "react";

export const MyContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("acqua");

  return (
    <div className='App'>
      <MyContext.Provider value={{showMenu, setShowMenu, mode, setMode}}>
        <Navbar />
        <LandingPage />
      </MyContext.Provider>
    </div>
  );
}

export default App;
