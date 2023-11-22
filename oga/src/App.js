import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/projects';
import Experience from './routes/Experience';

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </>
  );
};


export default App;