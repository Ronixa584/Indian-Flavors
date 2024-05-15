import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, description, imageId, price, itemAttribute }) => {
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
          <span className="bg-amber-400 py-1 px-2 rounded-md">
            <b className="text-white">{price / 100}</b> Rs
          </span>
          <div className=" py-1 px-2 rounded-md">
            <span
              className={`font-semibold flex justify-evenly${
                itemAttribute.vegClassifier === "VEG"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {itemAttribute.vegClassifier === "VEG" ? "VEG" : "Non VEG"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;