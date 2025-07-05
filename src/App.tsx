import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// @ts-ignore
import Home from './pages/Home.jsx'
// @ts-ignore
import About from './pages/About.jsx'
// @ts-ignore
import Projects from './pages/Projects.jsx'
// @ts-ignore
import Contacts from './pages/Contact.jsx'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'
import Loader from './components/Loader'

function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && !loading) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x2b4ee8,
        backgroundColor: 0x0,
        amplitudeFactor: 3.00,
        xOffset: 0.50,
        // yOffset: 0.25,
        size: 3.00
      });
    }
    return () => {
      if (vantaEffect.current) {
        // @ts-ignore
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div id="vanta-bg" className="main-container" ref={vantaRef}>
      {/* <ThemeToggle /> */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      {/* Add more sections/pages here as needed */}
    </div>
  )
}

export default App
