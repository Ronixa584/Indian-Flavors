import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchableDropdown = ({ options, value, onChange, onEnter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (options.includes(searchTerm)) {
        onEnter(searchTerm);
      } else {
        toast.warning("Service not Available");
      }
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container p-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
      <div>
        <input
          type="text"
          placeholder="Search City Name ..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          className="search-btn p-2 m-2 bg-yellow-200 text-black rounded-md shadow-xl hover:bg-emerald-400 transition"
        />
      </div>
      <div className="flex items-center">
        <select
          value={value}
          onChange={onChange}
          className="search-btn p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
        >
          {filteredOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SearchableDropdown;
