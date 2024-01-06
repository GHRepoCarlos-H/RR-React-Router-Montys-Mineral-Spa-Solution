import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Packages from './components/Packages';

function AppContent() {
const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath'];

return (
<div className="App">
<header>
<h1 className="title">Welcome to Monty's Mineral SPA</h1>
<div className="navBar">
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About Us</Link>
</li>
<li>
<Link to="/packages">Our Packages</Link>
</li>
</ul>
</div>
</header>

<div className="display">
<Routes>
<Route path="/about" element={<About />} />
<Route path="/packages" element={<Packages packages={packages} />} />
<Route path="/" element={<Home />} />
</Routes>
</div>
</div>
);
}

export default AppContent;





