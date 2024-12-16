import React, { useState } from 'react';
import "../App.css";

const RandomUserPage = ({ user }) => {
    const [activeField, setActiveField] = useState('name'); // Состояние для отслеживания активного поля

    // Функция для отображения информации в зависимости от выбранной кнопки
    const getActiveInfo = () => {
        switch (activeField) {
            case 'name':
                return `Hi, My name is ${user.name.first} ${user.name.last}`;
            case 'email':
                return `My email is ${user.email}`;
            case 'age':
                return `I am ${user.dob.age} years old`;
            case 'location':
                return `I live in ${user.location.city}, ${user.location.state}, ${user.location.country}`;
            case 'phone':
                return `My phone number is ${user.phone}`;
            case 'password':
                return `My password is ${user.login.password}`;
            default:
                return '';
        }
    };

    return (
        <div className="user-card">
            {/* Фото пользователя */}
            <div className="user-header">
                <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="user-avatar"
                />
            </div>

            {/* Основная информация */}
            <div className="user-info">
                <p className="user-greeting">{getActiveInfo()}</p>
            </div>

            {/* Иконки действий */}
            <div className="user-actions">
                <button
                    className={`action-button ${activeField === 'name' ? 'active' : ''}`}
                    onClick={() => setActiveField('name')}
                >
                    <i className="fas fa-user"></i>
                </button>
                <button
                    className={`action-button ${activeField === 'email' ? 'active' : ''}`}
                    onClick={() => setActiveField('email')}
                >
                    <i className="fas fa-envelope"></i>
                </button>
                <button
                    className={`action-button ${activeField === 'age' ? 'active' : ''}`}
                    onClick={() => setActiveField('age')}
                >
                    <i className="fas fa-calendar"></i>
                </button>
                <button
                    className={`action-button ${activeField === 'location' ? 'active' : ''}`}
                    onClick={() => setActiveField('location')}
                >
                    <i className="fas fa-map-marker-alt"></i>
                </button>
                <button
                    className={`action-button ${activeField === 'phone' ? 'active' : ''}`}
                    onClick={() => setActiveField('phone')}
                >
                    <i className="fas fa-phone"></i>
                </button>
                <button
                    className={`action-button ${activeField === 'password' ? 'active' : ''}`}
                    onClick={() => setActiveField('password')}
                >
                    <i className="fas fa-lock"></i>
                </button>
            </div>
        </div>
    );
};

export default RandomUserPage;
