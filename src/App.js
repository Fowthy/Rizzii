import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './pages/hero';
import Technologies from './pages/technologies';
import Services from './pages/services';
import Team from './pages/team';
import Footer from './components/footer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts
  return (
    <div className="App  m-auto">
      <ParallaxProvider>
        <Navbar scrollpos={scrollPosition}/>
          <Hero/>
        <Services/>
        <Technologies/>
        <Team/>
        <Footer/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
