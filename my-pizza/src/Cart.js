import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ selectedIngredients, totalPrice, placeOrder }) => {
    return (
        <div className="cart-container">
            <h3>Корзина:</h3>
            {selectedIngredients.length > 0 ? (
                <ul className="cart-ingredients-list">
                    {selectedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.name} - {ingredient.price} грн x {ingredient.quantity}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Корзина порожня</p>
            )}
            <div className="total-price">
                <h4>Загальна ціна: {totalPrice} грн</h4>
            </div>
            <button className="order-button" onClick={placeOrder}>Замовити</button>
        </div>
    );
};

export default Cart;
