import React from "react";
import CallToAction from '../CallToAction/CallToAction';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';
import Chicago from '../Chicago/Chicago';
import './HomePage.css';

export default function HomePage()
{
    return(
        <div className="homepage">
                <CallToAction />
                <Specials />
                <CustomersSay />
                <Chicago />
        </div>
    );
};