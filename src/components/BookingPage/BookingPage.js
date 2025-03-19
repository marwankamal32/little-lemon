import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';
import { submitAPI } from "../../api";

const BookingPage = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed"); // Navigate to the confirmation page
    } else {
      alert("Booking submission failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;