import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import cartImg from "../../public/7612.jpg";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className={`min-h-screen ${
        cartItems.length > 0
          ? "bg-gradient-to-r from-green-200 via-white-800 to-red-300"
          : "bg-white"
      } p-4 flex flex-col items-center`}
    >
      <h1 className="p-2 font-bold text-xl md:text-2xl lg:text-3xl text-red-800">
        Cart Items - {cartItems.length}
      </h1>

      <button
        onClick={handleClearCart}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-lg mb-4 transition duration-300"
      >
        Clear Cart
      </button>

      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <FoodItem key={item.id} {...item} />)
        ) : (
          <p className="text-gray-700 text-lg text-center">
            Your cart is empty
            <img
              className="h-96 transition-transform transform hover:scale-105"
              alt="LOGO"
              src={cartImg}
            ></img>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
