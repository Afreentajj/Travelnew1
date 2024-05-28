import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/login";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import BookingForm from "./components/Bookingform";
import ForgotPassword from './components/forgotpassword';
import SunsetPicture from './components/SunsetPicture';

const AppContent = () => {
  const location = useLocation();

  // Check if the current path is the root path
  const isRootPath = location.pathname === "/";

  return (
    <>
      {isRootPath ? (
        <SunsetPicture />
      ) : (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/home" element={<Home />} /> 
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/features" element={<Features />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
