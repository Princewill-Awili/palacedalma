import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
