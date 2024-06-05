import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Remove 'Switch' as it's not used
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Hero';
import P from './components/pages/P';
import P2 from './components/pages/P2';
import P3 from './components/pages/P3';
import Subscribe from './components/pages/Subscribe';
import Donate from './components/pages/Donate'; // Assuming you have a Donate component

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* No need for Switch as we have only one route */}
      <Route path="/" exact>
        <Hero />
        
        <P />
        <P2 />
        <P3 />
        <Subscribe />
      </Route>
      <Route path="/donate"> {/* Lowercase 'donate' */}
        <Donate />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
