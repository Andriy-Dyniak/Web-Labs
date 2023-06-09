import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, address, phone });
        setName('');
        setAddress('');
        setPhone('');
    };

    return (
        <div className="order-form-container">
            <h3>Форма замовлення:</h3>
            <form className="order-form" onSubmit={handleSubmit}>
                <label>
                    Ім'я:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Адреса:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    Телефон:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <button type="submit">Замовити</button>
            </form>
        </div>
    );
};

export default OrderForm;
