import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

import './App.css';

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
