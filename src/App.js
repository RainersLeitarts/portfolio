import './App.css';
import Navbar from './elements/navbar/Navbar';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Portfolio from './pages/Portfolio/Portfolio';
import PageWrapper from './elements/PageWrapper/PageWrapper';
import About from './pages/About/About';

function App() {
  return (<>
    <Navbar />
    <PageWrapper>
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </PageWrapper>
  </>
  );
}

export default App;
