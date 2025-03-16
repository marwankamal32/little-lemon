import React from 'react';
import './CustomersSay.css';

export default function CustomersSay() {
    return (
        <section className='customers-say'>
            <h2>What Our Customers Say</h2>
            <div className="testimonials">
                <div className="testimonial">
                <p>"The best Mediterranean food in town!"</p>
                <p>- John Doe</p>
                </div>
                <div className="testimonial">
                <p>"Amazing flavors and great service!"</p>
                <p>- Jane Smith</p>
                </div>
            </div>
        </section>
    );
};