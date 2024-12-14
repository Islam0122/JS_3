import React from 'react';
import {Link} from "react-router-dom";

const HomePage = (props) => {
    const { categories } = props;
    return (
        <div>
            <h1>home page</h1>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link to={"//level/"}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;