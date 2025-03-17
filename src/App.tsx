import React from 'react';
import GemstonePalaceShowcase from './components/GemstonePalaceShowcase';
import './index.css'; // Ensure Tailwind is imported

const App: React.FC = () => {
  return (
    <div>
      <GemstonePalaceShowcase />
    </div>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if needed
import Home from './pages/Home'; // Your homepage component
import Contact from './pages/Contact'; // Contact page component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
