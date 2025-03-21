import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import BookingPage from './components/BookingPage/BookingPage';
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
