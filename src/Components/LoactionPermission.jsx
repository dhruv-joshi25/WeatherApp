import React, { useEffect, useState } from "react";

const LocationPermission = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      // Check if Geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Attempt to get the current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Extract latitude and longitude from the position object
            const { latitude, longitude } = position.coords;

            // Set the currentLocation state with the obtained coordinates
            setCurrentLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser.");
      }
    };

    // Call the function to get the location when the component mounts
    getLocation();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {/* Your component content goes here */}
      {currentLocation && (
        <p>
          Current Location: Latitude {currentLocation.latitude}, Longitude{" "}
          {currentLocation.longitude}
        </p>
      )}
    </div>
  );
};

export default LocationPermission;
