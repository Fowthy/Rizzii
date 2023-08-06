import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './pages/hero';
import Technologies from './pages/technologies';
import Services from './pages/services';
import Team from './pages/team';

function App() {
  return (
    <div className="App  m-auto">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Services/>
      <Team/>
    </div>
  );
}

export default App;
