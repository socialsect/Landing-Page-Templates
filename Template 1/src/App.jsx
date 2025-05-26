import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Logo from './components/Logo';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // default is 0.1; lower = smoother
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
  return (
    <BrowserRouter>
      <div className="font-sans bg-black min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">
          <Hero />
          <Logo />
          <About />
          <SocialLinks />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;