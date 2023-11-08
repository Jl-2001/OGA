import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Pricing from './routes/Pricing';
import Solution from './routes/Solution';

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Solution" element={<Solution />} />
      </Routes>
    </>
  );
};


export default App;