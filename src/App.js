import React from 'react';
import Nav from './Nav/Nav';
import './App.css';
import HeaderA from './Header/HeaderA';
import AppFooter from './Footer/Footer';
import NewsSection from './News/News';
import Services from './Service/Services';
import Clients from './Logos/Clients';
import TrustedClients from './Testimonial/Testimonials';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeaderA />
      <Welcome />
      <Services />
      <TrustedClients />
      <Clients />
      <NewsSection />
      <AppFooter />
    </div>
  );
}

export default App;
