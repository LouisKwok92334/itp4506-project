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
            {tamJaiFoodData.map((food) => (
                <FoodCard name={food.name} description={food.description} price={food.price} image={chicken}/>
            ))}
        </div>
      </div>
    );
  }
  