import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Cactus", price: 12, category: "Succulent" },
  { id: 5, name: "Fern", price: 18, category: "Indoor" },
  { id: 6, name: "Bamboo", price: 25, category: "Outdoor" },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>

          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}