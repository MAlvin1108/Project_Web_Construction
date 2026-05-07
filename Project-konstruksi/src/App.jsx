import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Portfolio } from './components/portfolio';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
