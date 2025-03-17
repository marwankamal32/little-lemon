import React , {useState} from "react";
import './BookingForm.css';

export default function BookingForm() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:' , {date, time , guests , occasion});
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                type="time"
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >

                <option value="Birthday">Birthday</option>
                <option value ="Anniversary">Anniversary</option>
            </select>

            <button type="submit">Submit Reservation</button>
        </form>
    );
};