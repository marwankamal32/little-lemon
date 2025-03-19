import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";
import { useNavigate } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import { submitAPI } from "../../api";


import "./HomePage.css";

export default function HomePage() {
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const response = await submitAPI(formData);
        if (response) {
            navigate("/confirmed");
        }
    };

    return (
        <div className="homepage">
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />

            <div>
                <h1>Book a Table</h1>
                <BookingForm submitForm={submitForm} availableTimes={[]} />
            </div>
        </div>
    );
}
