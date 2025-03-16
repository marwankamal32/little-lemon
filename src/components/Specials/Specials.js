import React from 'react';
import './Specials.css';

export default function Specials () {
    return (
        <section className="specials">
            <h2> Weekly Specials </h2>
            <div className="specials-list">
                <div className="special-item">
                    <h3>Greek Salad</h3>
                    <p>Fresh tomatoes, cucumbers, onions, and feta cheese.</p>
                </div>
                <div className="special-item">
                    <h3>Bruschetta</h3>
                    <p>Grilled bread, topped with tomato, prosciutto, and cheese.</p>
                </div>
                <div className="special-item">
                    <h3>Lemon Dessert</h3>
                    <p>Homemade lemon cake with a citrus glaze.</p>
                </div>

            </div>

        </section>
    );
};