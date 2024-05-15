import { IMG_CDN_URL } from "../contants";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  areaName,avgRating,
}) => {
  const limitedCuisines = cuisines.slice(0, 2);

  return (
    <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300">
      <div style={{ position: "relative", paddingBottom: "60%" }}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="absolute w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <div className="mt-2">
            <b className="text-black">{areaName}</b>
          </div>
          <div className="h-16 overflow-y-auto">
            {limitedCuisines.map((cuisine, index) => (
              <h3 key={index} className="text-gray-500 text-sm">
                {cuisine}
              </h3>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <span className="bg-amber-400 py-1 px-2 rounded-md">
            <b className="text-white">{avgRating}</b> stars
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;






