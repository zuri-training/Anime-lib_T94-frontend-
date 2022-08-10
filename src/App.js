import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";

import "./App.css";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
