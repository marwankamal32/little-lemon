import React, { useReducer } from "react";
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00', '21:00'];
        default:
            return state;
    }
};

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <p>Book your table at Little Lemon!</p>
            <BookingForm availableTimes={availableTimes} onDateChange={updateTimes}/>
        </div>
    );
}
