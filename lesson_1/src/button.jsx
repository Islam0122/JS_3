import React from 'react';

const categories = [
    { name: 'Агробазар', image: 'https://media.tezsat.kg/media/category/images/%D0%B0%D0%B3%D1%80%D0%BE.png', link: 'https://www.tezsat.kg/category/agrobazar' },
    { name: 'Сельхозтехника', image: 'https://media.tezsat.kg/media/category/images/selhoz.png', link: 'https://www.tezsat.kg/category/selhoztehnika' },
    { name: 'Строительные материалы', image: 'https://media.tezsat.kg/media/category/images/stroymater.png', link: 'https://www.tezsat.kg/category/stroitelnye-materialy' },
    { name: 'Недвижимость', image: 'https://media.tezsat.kg/media/category/images/nedvizhimost.png', link: 'https://www.tezsat.kg/category/nedvizhimost' },
    { name: 'Электроника', image: 'https://media.tezsat.kg/media/category/images/electronic.png', link: 'https://www.tezsat.kg/category/elektronika' },
];

const Button = () => {
    return (
        <section className="section_buttons">
            <h1>Home Work 1</h1>
            <div className="category-btns">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href={category.link}
                        className="category-btn"
                        style={{
                            backgroundImage: `url(${category.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '15px',
                            padding: '10px',
                            textDecoration: 'none',
                            color: 'white',
                            display: 'block',
                            textAlign: 'center',
                            borderRadius: '8px',
                        }}
                    >
                        {category.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Button;