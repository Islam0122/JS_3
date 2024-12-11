import React from 'react';
import App from "../../App.jsx";

// const PizzaCard = (props) => {
//     const {pizza} = props;
//     return (
//         <div className={"card"}>
//             <img src={pizza.imgUrl} alt="pizza-img"/>
//             <h3>{pizza.name} <span>{pizza.icons}</span></h3>
//             <p>{pizza.description}</p>
//             <div className={"card-footer"}>
//                 <h5>{pizza.price}</h5>
//                     <button>Выбрать</button>
//             </div>
//         </div>
//     );
// };
//
// export default PizzaCard;


// const pizzaData = [
//     {
//         name: "Сырная",
//         icons: ["🌱", "👶"],
//         description: "Моцарелла, смесь сыров чеддер и пармезан, соус альфредо",
//         price: "495 сом",
//         imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
//     },
//     {
//         name: "Ветчина и сыр",
//         icons: ["👶"],
//         description: "Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо",
//         price: "295 сом",
//         imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
//     },
//     {
//         name: "Двойной цыпленок",
//         icons: ["👶"],
//         description: "Двойная порция цыпленка, моцарелла, соус альфредо",
//         price: "395 сом",
//         imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
//     },
//     {
//         name: "Маргарита",
//         icons: ["🌱"],
//         description: "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
//         price: "395 сом",
//         imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif"
//     }
// ];
//
// const PizzaCard = () => {
//     return (
//         <div style={{display: "flex", alignItems: "center"}}>
//             {pizzaData.map((pizza, index) => (
//                 <div className="card" key={index}>
//                     <img src={pizza.imgUrl} alt={`${pizza.name} image`} />
//                     <h3>{pizza.name} <span>{pizza.icons.join(' ')}</span></h3>
//                     <p>{pizza.description}</p>
//                     <div className="card-footer">
//                         <h5>{pizza.price}</h5>
//                         <button>Выбрать</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default PizzaCard;

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price-container">
                <span>{product.price}</span>
            </div>
            <button className="add-to-cart">В корзину</button>
        </div>
    );
};
export default ProductCard;