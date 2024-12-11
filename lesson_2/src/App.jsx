import React from 'react';
import ProductCard from "./components/PizzaCard/PizzaCard.jsx";

const App = () => {

    const pizzaData = [
        {
            name: "Сырная",
            icons: ["🌱", "👶"],
            description: "Моцарелла, смесь сыров чеддер и пармезан, соус альфредо",
            price: "495 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        },
        {
            name: "Ветчина и сыр",
            icons: ["👶"],
            description: "Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо",
            price: "295 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        },
        {
            name: "Двойной цыпленок",
            icons: ["👶"],
            description: "Двойная порция цыпленка, моцарелла, соус альфредо",
            price: "395 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        },
        {
            name: "Маргарита",
            icons: ["🌱"],
            description: "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
            price: "395 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        }
    ];
    const popular_pizzaData = [
        {
            name: "Пепперони",
            price: "465 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        },
        {
            name: "Мексиканская",
            price: "465 сом",
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        },
        {
            name: "2 пиццы",
            price: "1 195 сом",
            originalPrice: "1 370 сом", // Перечеркнутая цена
            imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
        }
    ];
    const productData = [
        {
            name: "Беспроводная колонка",
            price: "6 900с",
            imageUrl: "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2Fpreview%2F674efc75a5c88_frame-1.jpg&w=256&q=75",
            description: "Login Gadgets",
        },
        {
            name: "Вертикальный пылесос",
            price: "29 900с",
            imageUrl: "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2Fpreview%2F674efc75a5c88_frame-1.jpg&w=256&q=75",
            description: "Softech Gadgets",
        },
        {
            name: "Терминал",
            price: "115 000с",
            imageUrl: "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2Fpreview%2F674efc75a5c88_frame-1.jpg&w=256&q=75",
            description: "Login",
        },
        {
            name: "Ноутбук HP Victus",
            price: "72 900с",
            imageUrl: "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2Fpreview%2F674efc75a5c88_frame-1.jpg&w=256&q=75",
            description: "Softech Computers",
        }
    ];

    return (
        <div>
            {/*{pizzaData.map((pizza) => {*/}
            {/*    return <PizzaCard key={pizza.name} pizza={pizza} />*/}
            {/*})}*/}
            <div style={{display: "flex", alignItems: "center"}}>
                {pizzaData.map((pizza, index) => (
                    <div className="card" key={index}>
                        <img src={pizza.imgUrl} alt={`${pizza.name} image`}/>
                        <h3>{pizza.name} <span>{pizza.icons.join(' ')}</span></h3>
                        <p>{pizza.description}</p>
                        <div className="card-footer">
                            <h5>{pizza.price}</h5>
                            <button>Выбрать</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Часто заказывают</h2>
                <div style={{display: "flex", alignItems: "center"}}>
                    {popular_pizzaData.map((pizza, index) => (
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
                             key={index}>

                            <img src={pizza.imgUrl} alt={pizza.name}/>
                            <div>
                                <h3>{pizza.name}</h3>
                                <span>{pizza.price}</span>
                                {pizza.originalPrice && <span>{pizza.originalPrice}</span>}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                {productData.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </div>
    );
};

export default App;