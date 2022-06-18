import './App.css';
import Navbar from './elements/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
