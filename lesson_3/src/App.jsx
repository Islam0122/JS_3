import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home_page.jsx";
import LevelPage from "./pages/level_page.jsx";

const categories = ['Reading', 'Writing', 'Listening', 'Speaking'];

const Layout = () => {
    return (
        <div>
            <header> H</header>
            <Outlet />
            <footer> f</footer>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage  categories={categories} />}/>
                    <Route path="/level" element={<LevelPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
