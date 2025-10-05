import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
        <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
        </div>
      )}
    
    </>
  )
}

export default App
