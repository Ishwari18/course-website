import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import NoteState from './context/notes/NoteState';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <>
     <NoteState>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Corrected path for Login */}
          <Route path="/signup" element={<Signup />} /> {/* Corrected path for Signup */}
        </Routes>
        <Footer/>
      </BrowserRouter>
     </NoteState>
      
    </>
  );
}

export default App;
