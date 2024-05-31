import { IMG_CDN_URL } from "../contants";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, description, imageId, price, itemAttribute }) => {
  const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    };
  
  return (
    <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300">
      <div style={{ position: "relative", paddingBottom: "60%" }}>
        <img
          src={IMG_CDN_URL + imageId}
          alt={name}
          className="absolute w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          {/* <span className="bg-amber-400 py-1 px-2 rounded-md">
            <b className="text-white">{price / 100}</b> Rs
          </span> */}
          <div className=" flex items-center justify-between">
            <span className="bg-green-500 text-white py-1 px-2 rounded-md">
              {price === undefined ? 399 : price / 100} Rs
            </span>

            <span
              className={`text-sm font-semibold py-1 px-2 rounded-md ${
                itemAttribute.vegClassifier === "VEG"
                  ? "text-green-500 bg-green-100"
                  : "text-red-500 bg-red-100"
              }`}
            >
              {itemAttribute.vegClassifier === "VEG" ? "VEG" : "Non VEG"}
            </span>

            <span>
              <button
                onClick={handleRemoveItem(cartItems)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-2 transition duration-300"
              >
                Remove
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;






// import { IMG_CDN_URL } from "../contants";
// import { useDispatch } from "react-redux";
// import { removeItem } from "../utils/cartSlice";

// const FoodItem = ({ id, name, description, imageId, price, itemAttribute }) => {
//   const dispatch = useDispatch();

//   const handleRemoveItem = () => {
//     dispatch(removeItem(id));
//   };

//   return (
//     <div className="w-full md:w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//       <div className="relative overflow-hidden rounded-t-lg aspect-w-1 aspect-h-1">
//         <img
//           src={IMG_CDN_URL + imageId}
//           alt={name}
//           className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
//         />
//       </div>
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{name}</h2>
//         <div className="flex items-center justify-between">
//           <span className="bg-green-500 text-white py-1 px-2 rounded-md">
//             {price / 100} Rs
//           </span>
//           <span
//             className={`text-sm font-semibold py-1 px-2 rounded-md ${
//               itemAttribute.vegClassifier === "VEG"
//                 ? "text-green-500 bg-green-100"
//                 : "text-red-500 bg-red-100"
//             }`}
//           >
//             {itemAttribute.vegClassifier === "VEG" ? "VEG" : "Non VEG"}
//           </span>
//         </div>
//       </div>
//       <button
//         onClick={handleRemoveItem}
//         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-2 transition duration-300"
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

// export default FoodItem;
