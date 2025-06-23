import './App.css';
import About from './Components/About/About';
import Home from './Components/Home Page/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Project';
import Gitstats from './Components/GitStats/Gitstats';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
      <About/>
      <Skills />
      <Projects />
      <Gitstats />
      <Contact />
    </div>
  );
}

export default App;
