// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React from "react";
import ProjectForm from "./components/ProjectForm";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";

import GWIL from "./pages/General/Gwil";
import Benefits from "./pages/General/Benefits";
import Engage from "./pages/General/Engage";
import GES from "./pages/General/GES";
import GCC from "./pages/General/GCC";
import GSAP from "./pages/General/GSAP";

import EWIL from "./pages/Employer/EWIL";
import EBENEFITS from "./pages/Employer/Ebenefits";
import PE from "./pages/Employer/PE";
import ESAP from "./pages/Employer/ESAP";
import CP from "./pages/Employer/CP";

import SWIL from "./pages/Students/SWIL";
import SBENEFITS from "./pages/Students/Sbenefits";
import P from "./pages/Students/P";
import SP from "./pages/Students/SP";
import ES from "./pages/Students/ES";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import ImageSlider from "./components/ImagesSlider";




const Contact = () => <div>Contact Page</div>;

function App() {
  const submitForm = (formData) => {
    // Implement logic to send form data to the server
    // You can use fetch or axios for this
    fetch("http://localhost:3001/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route index element={<><Home /><ImageSlider/></>} />
          <Route path="/form" element={<ProjectForm onSubmit={submitForm} />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/gwil" element={<GWIL />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/ges" element={<GES />} />
          <Route path="/gcc" element={<GCC />} />
          <Route path="/gsap" element={<GSAP />} />

          <Route path="/ewil" element={<EWIL />} />
          <Route path="/ebenefits" element={<EBENEFITS />} />
          <Route path="/pe" element={<PE />} />
          <Route path="/esap" element={<ESAP />} />
          <Route path="cp" element={<CP />} />

          <Route path="swil" element={<SWIL />} />
          <Route path="sbenefits" element={<SBENEFITS />} />
          <Route path="p" element={<P />} />
          <Route path="sp" element={<SP />} />
          <Route path="es" element={<ES />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
