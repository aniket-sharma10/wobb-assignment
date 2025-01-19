import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};


export default App;
