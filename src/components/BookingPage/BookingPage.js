import React from "react";
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

export default function BookingPage() {
    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <p>Book your table at Little Lemon!</p>
            <BookingForm/>
        </div>

    );
};