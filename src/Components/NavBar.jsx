import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaSearchLocation, FaMoon } from "react-icons/fa";

// Replace with your actual API key
const API_KEY = "vDRiwQcJ8MutIdbyL4OKOg==3fadi8A3704TnbZT";

export default function NavBar() {
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = darkMode ? "#333" : "#fff";
    body.style.color = darkMode ? "#fff" : "#333";
  }, [darkMode]);

  const findCity = async (city) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        {
          headers: { "X-Api-Key": API_KEY },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav className="flex justify-between bg-blue-500 p-3">
        <div>
          <Link className="font-black flex items-center font-serif " to="/">
            Weather App
          </Link>
        </div>
        <div className="flex">
          <label className="flex items-center bg-blue-400 rounded-md hover:bg-blue-300 transition ease-in duration-50">
            <input
              type="search"
              name="search"
              className="p-2 rounded-s-md text-amber-950 focus:outline-none "
              placeholder="Enter Location"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch
              className="m-2 font-bold text-2xl cursor-pointer"
              onClick={findCity}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  findCity(city);
                }
              }}
            />
          </label>
          <label
            htmlFor="loaction"
            className="flex items-center p-2 bg-blue-400 rounded-md ml-2 justify-between hover:bg-blue-300 transition ease-in duration-200"
            id="Loaction"
          >
            Rajkot
            <FaSearchLocation className="ml-2" />
          </label>
          <div className="ml-2 flex items-center">
            <label htmlFor="darkModeToggle" className="cursor-pointer">
              <input
                id="darkModeToggle"
                type="checkbox"
                className="hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <FaMoon className=" m-2 font-bold text-2xl cursor-pointer" />
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
