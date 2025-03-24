import { useState } from 'react';
import './App.css';
import { LoadingScrren } from './components/LoadigScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (<> {!isLoaded && < LoadingScrren onComplete={() => setIsLoaded(true)} />
  }
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`} >

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></MobileMenu>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div >

  </>

  );
}

export default App
