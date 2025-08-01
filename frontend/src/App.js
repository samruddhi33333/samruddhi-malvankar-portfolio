// App.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      
      <div id="home" className="pt-20">
        <Home />
      </div>
      
      <div id="about" className="pt-20">
        <About />
      </div>
      
      <div id="skills" className="pt-20">
        <Skills />
      </div>
      
      <div id="projects" className="pt-20">
        <Projects />
      </div>
      
      <div id="contact" className="pt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
