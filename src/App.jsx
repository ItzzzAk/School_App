import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    
    <Router>
      <div className="main w-full bg-zinc-900 text-white font-gilroy">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
