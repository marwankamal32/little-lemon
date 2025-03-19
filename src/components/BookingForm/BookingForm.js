import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm(formData); // Call the submitForm function passed via props
    }
  };

  const validateForm = () => {
    const { name, email, date, time, guests, occasion } = formData;
    return (
      name.trim() !== "" &&
      email.includes("@") &&
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ""
    );
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book a Table</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </label>
      <label>
        Occasion:
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default BookingForm;