

import Arena from './components/Arena';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Venue from './components/Venue';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Venue/>
     <Arena/>
     <Events/>
     <Footer/>
    </div>
  );
}

export default App;
