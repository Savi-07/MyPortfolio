import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import ThemeToggle from "./components/ThemeToggle";

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
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x2b4ee8,
        backgroundColor: 0x0,
        amplitudeFactor: 3.0,
        xOffset: 0.5,
        // yOffset: 0.25,
        size: 3.0,
      });
    }
    return () => {
      if (vantaEffect.current) {
        // @ts-expect-error Vanta library types are incomplete
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
      <Contact />

      {/* Add more sections/pages here as needed */}
    </div>
  );
}

export default App;
