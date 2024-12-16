import React, {useEffect, useState} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home_page.jsx";
import LevelPage from "./pages/level_page.jsx";
import "./App.css"
import RandomUserPage from "./pages/random_user_page.jsx";


const App = () => {
    const [user, setUser] = useState(null); // Начальное значение null
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [error, setError] = useState(null); // Состояние для ошибок

    // Асинхронный API-запрос
    const fetchUser = async () => {
        try {
            setLoading(true); // Включаем индикатор загрузки
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
                throw new Error('Failed to fetch user data'); // Обработка ошибок
            }
            const data = await response.json();
            setUser(data.results[0]); // Устанавливаем данные пользователя
        } catch (err) {
            setError(err.message); // Устанавливаем ошибку
        } finally {
            setLoading(false); // Выключаем индикатор загрузки
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {user && <RandomUserPage user={user} />}
        </div>
    );
};

export default App;
