import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoachingPersonal from './pages/CoachingPersonal';
import CoachingFamiliar from './pages/CoachingFamiliar';
import CoachingEquipos from './pages/CoachingEquipos';
import PinturaCorporativa from './pages/PinturaCorporativa';
import Testimonios from './pages/Testimonios';
import SalaReuniones from './pages/SalaReuniones';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coaching-personal" element={<CoachingPersonal />} />
            <Route path="/coaching-familiar" element={<CoachingFamiliar />} />
            <Route path="/coaching-equipos" element={<CoachingEquipos />} />
            <Route path="/pintura-corporativa" element={<PinturaCorporativa />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/sala-reuniones" element={<SalaReuniones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;