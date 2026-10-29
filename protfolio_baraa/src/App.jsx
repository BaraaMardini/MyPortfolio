import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;