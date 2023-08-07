import Navbar from './components/navbar';
import Hero from './pages/hero';
import Technologies from './pages/technologies';
import Services from './pages/services';
import Team from './pages/team';
import Footer from './components/footer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';
import Contact from './pages/contact';
import { ScrollProvider } from './components/scrollprovider';
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
    <ScrollProvider>
      <div className="App  m-auto">
        <ParallaxProvider>
          <Navbar scrollpos={scrollPosition}/>
            <Hero/>
          <Services/>
          <Technologies/>
          <Team/>
          <Contact/>
          <Footer/>
        </ParallaxProvider>
      </div>
    </ScrollProvider>
  );
}

export default App;
