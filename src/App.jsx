import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 font-jakarta selection:bg-primary/30 selection:text-primary-foreground">
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
