import React, { useState } from 'react';
import './HomePage.css';
import Cart from './Cart';
import OrderForm from './OrderForm';
import pizzaImage from './pizza.svg';

const HomePage = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([
        { id: 0, name: 'Тісто', price: 40, quantity: 1 }
    ]);
    const [totalPrice, setTotalPrice] = useState(40);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addIngredient = (ingredient) => {
        const selectedIngredient = selectedIngredients.find(
            (selected) => selected.id === ingredient.id
        );

        if (selectedIngredient) {
            const updatedIngredients = selectedIngredients.map((selected) => {
                if (selected.id === ingredient.id) {
                    return {
                        ...selected,
                        quantity: selected.quantity + 1
                    };
                }
                return selected;
            });

            setSelectedIngredients(updatedIngredients);
        } else {
            setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
        }

        setTotalPrice(totalPrice + ingredient.price);
    };

    const removeIngredient = (ingredient) => {
        const selectedIngredient = selectedIngredients.find(
            (selected) => selected.id === ingredient.id
        );

        if (selectedIngredient) {
            if (selectedIngredient.id === 0) {
                if (selectedIngredient.quantity === 1) {
                    return;
                }
            }

            if (selectedIngredient.quantity === 1) {
                const updatedIngredients = selectedIngredients.filter(
                    (selected) => selected.id !== ingredient.id
                );

                setSelectedIngredients(updatedIngredients);
            } else {
                const updatedIngredients = selectedIngredients.map((selected) => {
                    if (selected.id === ingredient.id) {
                        return {
                            ...selected,
                            quantity: selected.quantity - 1
                        };
                    }
                    return selected;
                });

                setSelectedIngredients(updatedIngredients);
            }

            setTotalPrice(totalPrice - ingredient.price);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const resetOrder = () => {
        setSelectedIngredients([]);
        setTotalPrice(0);
        setIsModalOpen(false);
    };

    const availableIngredients = [
        { id: 0, name: 'Тісто', price: 40 },
        { id: 1, name: 'Помідори', price: 10 },
        { id: 2, name: 'Сир', price: 15 },
        { id: 3, name: 'Печериці', price: 12 },
        // Додайте інші доступні інгредієнти тут
    ];

    return (
        <div className="homepage-container">
            <h2>Конструктор піци</h2>
            <img src={pizzaImage} alt="Піца" className="pizza-image" />
            <div className="ingredients-section">
                <h3>Доступні інгредієнти:</h3>
                <ul className="ingredients-list">
                    {availableIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.name} - {ingredient.price} грн
                            <button onClick={() => addIngredient(ingredient)}>Додати</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="selected-ingredients">
                <h3>Обрані інгредієнти:</h3>
                {selectedIngredients.length > 0 ? (
                    <ul className="selected-ingredients-list">
                        {selectedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.name} - {ingredient.price} грн x {ingredient.quantity}
                                <button onClick={() => removeIngredient(ingredient)}>Видалити</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Інгредієнти не обрані</p>
                )}
            </div>
            <div className="total-price">
                <h3>Загальна ціна: {totalPrice} грн</h3>
            </div>
            {!isModalOpen ? (
                <div className="checkout-section">
                    <button onClick={openModal}>Оформити покупку</button>
                </div>
            ) : (
                <div className="modal">
                    <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
                        <OrderForm
                            selectedIngredients={selectedIngredients}
                            totalPrice={totalPrice}
                            onSubmit={resetOrder}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
