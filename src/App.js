import "./App.css";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";

function App() {
  return (
    
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
