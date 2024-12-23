import React from 'react';
import {Outlet, Route, Routes, NavLink,Link} from "react-router-dom";
import HomePage from "./pages/home_page.jsx";
import LevelPage from "./pages/level_page.jsx";
import LessonsPage from "./pages/lessons_page.jsx";
import LessonPage from "./pages/lesson_page.jsx";
import Auth from "./pages/Auth_page.jsx";
import AuthPage from "./pages/Auth_page.jsx";

const categories = ['Reading', 'Writing', 'Listening', 'Speaking']

const Layout = () => {
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/auth"> Log in </NavLink>
            </header>
            <Outlet/>
            <footer> f</footer>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage categories={categories} />}/>
                    <Route path="/level/:category" element={<LevelPage/>}/>
                    <Route path="/lessons" element={<LessonsPage/>}/>
                    <Route path="/lesson" element={<LessonPage/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;