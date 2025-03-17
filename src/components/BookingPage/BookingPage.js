import React, { useReducer , useEffect} from "react";
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';


const fetchAPI = window.fetchAPI;

const fetchAvailableTimes = async(date) => {
    try {
        const response = await fetchAPI(date);
        return response;
    } catch (error) {
        console.error("Error fetching available times:", error);
        return [];
    };
};

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.times;
        default:
            return state;
    }
};

export default function BookingPage() {
    const today = new Date().toISOString().split("T")[0];

    const initializeTimes = async ()=> {
        const times = await fetchAvailableTimes(today);
        return times;
    };

    const [availableTimes, dispatch] = useReducer(timesReducer, [], () => []);

    useEffect(() => {
        initializeTimes().then((times) =>
          dispatch({ type: "UPDATE_TIMES", times })
        );
    }, []);

    const updateTimes = async (selectedDate) => {
        const times = await fetchAvailableTimes(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', times});
    };

    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <p>Book your table at Little Lemon!</p>
            <BookingForm availableTimes={availableTimes} onDateChange={updateTimes}/>
        </div>
    );
}
