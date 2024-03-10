import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// // Replace with your actual API key
// const API_KEY = "vDRiwQcJ8MutIdbyL4OKOg==3fadi8A3704TnbZT";
// export default function NavBar() {
//   const [city, setCity] = useState("");
//   const findCity = async (city) => {
//     try {
//       const response = await fetch(
//         `https://api.api-ninjas.com/v1/weather?city=${city}`,
//         {
//           headers: { "X-Api-Key": API_KEY },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
<div>
  <nav className="flex justify-between bg-blue-500 p-3">
    <div>
      <Link className="font-black flex items-center font-serif " to="/">
        Weather App
      </Link>
    </div>
    <label className="flex items-center bg-blue-400 rounded-md">
      <input
        type="search"
        name="search"
        className="p-2 rounded-s-md text-amber-950 focus:outline-none "
        placeholder="Enter Location"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch
        className="text-blue-950 m-2 font-bold text-2xl cursor-pointer"
        onClick={findCity}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            findCity(city);
          }
        }}
      />
    </label>
  </nav>
</div>;
