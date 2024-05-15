import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen Body bg-gradient-to-r from-pink-400 to-yellow-400 p-4">
      <h1 className="p-2 font-bold text-xl md:text-2xl lg:text-3xl">
        Cart Items - {cartItems.length}
      </h1>

      <button
        onClick={() => handleClearCart()}
        className="bg-green-400 p-2 m-2 search-btn text-white rounded-md shadow-xl"
      >
        Clear Cart
      </button>

      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
