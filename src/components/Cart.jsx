import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import cartImg from "../../public/7612.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className={`min-h-screen  ${
        cartItems.length > 0
          ? "bg-gradient-to-r from-green-200 via-white-800 to-red-300 "
          : "bg-white"
      } p-4 flex flex-col-reverse items-center justify-center `}
    >
      {cartItems.length > 0 ? (
        <div className="w-full flex justify-between items-start">
          {/* <div className="w-full lg:w-2/3 flex flex-col lg:flex-row flex-wrap justify-center items-center">
            {cartItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div> */}
          <div className="w-full  flex justify-center items-center">
            <Bill cartItems={cartItems} />
          </div>
        </div>
      ) : (
        <div className="text-center flex flex-col items-center justify-center h-full">
          <p className="text-gray-700 text-lg mb-4">Your cart is empty</p>
          <img
            className="h-96 transition-transform transform"
            alt="LOGO"
            src={cartImg}
          />
        </div>
      )}
      {/* {cartItems.length > 0 && (
        <button
          onClick={handleClearCart}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Clear Cart
        </button>
      )} */}
    </div>
  );
};

export default Cart;

import { addItem, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL, OFFER_LOGO_URL } from "../contants";

const Bill = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + (isNaN(item.price) ? 399 : item.price) * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotal();
  const discountPrice = totalPrice > 1000 ? totalPrice * 0.1 : 0; // Example discount logic

  const formatPrice = (price) => {
    return (Math.ceil(price * 100) / 100).toFixed(2);
  };

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Bill Details</h2>
      <div className="overflow-x-auto max-h-96">
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-200 z-10">
            <tr>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto max-h-64">
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">{item.name}</td>
                <div className="relative mt-4">
                  <img
                    src={IMG_CDN_URL + item?.imageId}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <td className="absolute bottom-1 right-1/4 flex space-x-2">
                    <div className="rounded-full flex justify-center items-center">
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="bg-red-500 text-white py-1 px-3 hover:bg-red-600 transition duration-200 flex justify-center items-center"
                      >
                        -
                      </button>
                      <span className="bg-white text-black py-1 px-3 flex justify-center items-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleAddItem(item)}
                        className="bg-green-500 text-white py-1 px-3 hover:bg-green-600 transition duration-200 flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </div>
                <td className="py-2 px-4 text-right">
                  {isNaN(item.price) ? 399 : item.price / 100} Rs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sticky bg-white pt-4 mt-4 border-t">
        <div className="flex justify-between">
          <span className="font-semibold">Total Price:</span>
          <span>{formatPrice(totalPrice / 100)} Rs</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Discount:</span>
          <span>{formatPrice(discountPrice / 100)} Rs</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Final Price:</span>
          <span>{formatPrice((totalPrice - discountPrice) / 100)} Rs</span>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

// export default Bill;

//Note
//Need to fix the 399 issuse during total in bill

//OLD
// const Bill = ({ cartItems }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) =>
//         total + (isNaN(item.price) ? 399 : item.price) * item.quantity,
//       0
//     );
//   };

//   const totalPrice = calculateTotal();
//   const discountPrice = totalPrice > 1000 ? totalPrice * 0.1 : 0; // Example discount logic

//   return (
//     <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Bill Details</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 bg-gray-200">Item</th>
//               <th className="py-2 px-4 bg-gray-200">Quantity</th>
//               <th className="py-2 px-4 bg-gray-200">Price</th>
//             </tr>
//           </thead>
//           <tbody className="">
//             {cartItems.map((item) => (
//               <tr key={item.id} className="border-t">
//                 <td className="py-2 px-4">{item.name}</td>
//                 <div className="relative mt-4">
//                   <img
//                     src={IMG_CDN_URL + item?.imageId}
//                     className="w-full md:w-48 h-32 object-cover rounded-lg"
//                   />
//                   <td className="absolute bottom-1 right-1/4 flex space-x-2">
//                     <div className="rounded-full flex justify-center items-center">
//                       <button
//                         onClick={() => handleRemoveItem(item)}
//                         className="bg-red-500 text-white py-1 px-3 hover:bg-red-600 transition duration-200 flex justify-center items-center"
//                       >
//                         -
//                       </button>
//                       <span className="bg-white text-black py-1 px-3 flex justify-center items-center">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => handleAddItem(item)}
//                         className="bg-green-500 text-white py-1 px-3 hover:bg-green-600 transition duration-200 flex justify-center items-center"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                 </div>
//                 <td className="py-2 px-4 text-right">
//                   {isNaN(item.price) ? 399 : item.price / 100} Rs
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="border-t pt-4 mt-4">
//         <div className="flex justify-between">
//           <span className="font-semibold">Total Price:</span>
//           <span>{totalPrice / 100} Rs</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="font-semibold">Discount:</span>
//           <span>{discountPrice / 100} Rs</span>
//         </div>
//         <div className="flex justify-between font-bold text-lg mt-2">
//           <span>Final Price:</span>
//           <span>{(totalPrice - discountPrice) / 100} Rs</span>
//         </div>
//       </div>
//       <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };
