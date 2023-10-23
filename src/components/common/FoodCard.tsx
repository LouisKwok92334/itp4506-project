export function FoodCard(props: {
    name: string;
    description: string;
    price: number;
    image: string;
}) {
    return (
        <div className="FoodCard">
            <div>
                <span className="food-name">{props.name}</span>
                <span className="food-description">{props.description}</span>
                <span className="food-price">HK$ {props.price}</span>
            </div>
            <img className="food-image" src={props.image} alt={props.name} />
            <div className="food-quantity">
                <button className="minus-button">-</button>
                <span className="quantity">0</span>
                <button className="plus-button">+</button>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    )
}