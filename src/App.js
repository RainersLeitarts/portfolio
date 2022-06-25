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
import PageWrapper from './elements/PageWrapper/PageWrapper';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <PageWrapper>
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </PageWrapper>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
