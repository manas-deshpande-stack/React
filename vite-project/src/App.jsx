import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";

function App() {
  const total = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <nav>
        <h2>Paradise Nursery 🌱</h2>
        <p>Cart: {total}</p>
      </nav>

      <ProductList />
      <CartItem />
    </div>
  );
}

export default App;