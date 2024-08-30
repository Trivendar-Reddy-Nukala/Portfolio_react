import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './Blogs';
import Certificates from './Certificates';
import Contact from './Contact';
import Skill from './Skill';
import Projects from './Projects';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Skill" element={<Skill/>} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
