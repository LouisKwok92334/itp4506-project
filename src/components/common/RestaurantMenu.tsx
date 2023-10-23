import { FoodCard } from "./FoodCard";
import tamJaiFoodData from '../../json/tamJaiFood.json';
import logo from '../../images/tamJai-images/logo.jpg';
import chicken from '../../images/tamJai-images/Chicken.jpg';
import minced_pork from '../../images/tamJai-images/Minced_Pork_Northern_Style.jpg';
import pickled_cabbage from '../../images/tamJai-images/Pickled_Cabbage.jpg';
import egg from '../../images/tamJai-images/Preserved_Duck_Egg.jpg';
import rice_noodles from '../../images/tamJai-images/Rice_Noodles.jpg';
import sliced_pork from '../../images/tamJai-images/Sliced_Pork_Belly_with_Mashed_Garlic.jpg';
import set2 from '../../images/tamJai-images/Value_Set_for_2.jpg';
import set3 from '../../images/tamJai-images/Value_Set_for_3.jpg';
import set4 from '../../images/tamJai-images/Value_Set_for_4.jpg';
import "./RestaurantMenu.css";

export function RestaurantMenu() {
    return (
      <div className="RestaurantMenu">
        <div className="menu-item-container">
          <h2>TamJai SamGor Mixian</h2>
          <h6>HK$ 15 Delivery, HK$ 80 Minimum</h6>
          <div className="list-container">
            <div className="search-bar">
              <input type="text" placeholder="Search.." name="search" />
            </div>
            <div className="list-bar">
              <ul>
                <li>Popular</li>
                <li>Promotional Item</li>
                <li>Sets</li>
                <li>Side Dishes</li>
                <li>Drinks</li>
              </ul>
            </div>
          </div>
  
          <h4>Popular</h4>
          <div className="food-card-container">
            <div className="FoodCard">
              <div className="FoodCard-Title">
                <span className="food-name">Chicken</span>
                <span className="food-description">Popular Snack</span>
                <span className="food-price">HK$ 33</span>
              </div>
              <img className="food-image" src={chicken} alt="chicken" />
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
          <h4>Promotional Item</h4>
          <h4>Sets</h4>
          <h4>Side Dishes</h4>
          <h4>Drinks</h4>
        </div>
  
       <div className="menu-item-cart">
        <div className="cart-title">
            <h3>Shopping Cart</h3>
        </div>
        <div className="cart-item">
            <span className="cart-item-name">Chicken</span>
            <div className="cart-item-quantity-control">
            <button className="quantity-button">-</button>
            <input type="number" className="cart-item-quantity" value={1} />
            <button className="quantity-button">+</button>
            </div>
            <span className="cart-item-price">HK$ 33</span>
        </div>
        <div className="cart-total">
            <h3>Total: HK$ 33</h3>
        </div>
        </div>
      </div>
    );
  }