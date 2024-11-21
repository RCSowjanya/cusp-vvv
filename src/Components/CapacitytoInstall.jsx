import React, { useState, useRef, useEffect } from "react";
import { FaRegUser, FaInfoCircle } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { toast } from "react-toastify";
const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 17.385044, // Default latitude (Hyderabad)
  lng: 78.486671, // Default longitude (Hyderabad)
};

const libraries = ["places", "maps"];

const CapacitytoInstall = ({ formData, handleChange, errors }) => {
  const [markerPosition, setMarkerPosition] = useState(center);
  const searchBoxRef = useRef(null);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  // Use the loader with consistent options
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDbSgeCmbjRl5YyaBedO5iOTIUfQjF9dvU", // Use your API key
    libraries,
  });

  // Load Google Maps only once
  useEffect(() => {
    if (isLoaded && !loadError) {
      setGoogleMapsLoaded(true);
    }
  }, [isLoaded, loadError]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!googleMapsLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  // Function to handle marker drag and update location
  const onMarkerDragEnd = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });

    // Update the location input with latitude and longitude
    handleChange({
      target: { name: "location", value: `${lat}, ${lng}` },
    });
  };

  // Function to get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMarkerPosition({ lat: latitude, lng: longitude });

          // Update the location input with latitude and longitude
          handleChange({
            target: { name: "location", value: `${latitude}, ${longitude}` },
          });
          toast.success("Geo Location retrieval Successfull");
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    }
  };

  // Function to handle place selection from the autocomplete
  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const selectedPlace = places[0];
      const lat = selectedPlace.geometry.location.lat();
      const lng = selectedPlace.geometry.location.lng();
      setMarkerPosition({ lat, lng });

      // Update the location input with latitude and longitude
      handleChange({
        target: { name: "location", value: `${lat}, ${lng}` },
      });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-4 flex items-center justify-center">
          Capacity to Install
          <div className="relative group ml-2">
            <FaInfoCircle className="text-[#004A9C] cursor-pointer" />
            <div className="absolute hidden group-hover:block bg-[#FFFDF9] border border-[#004A9C] text-[#004A9C] text-[14px] p-4 rounded-md w-80 shadow-lg">
              <p className="text-gray-400">
                <a
                  href="https://www.uppclonline.com/dispatch/Portal/appmanager/uppcl/wss?_nfpb=true&_pageLabel=uppcl_consumption_consumptionCalculator&pageID=1011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004A9C] underline pr-1"
                >
                  Click here
                </a>
                to get capacities of the appliances. This link provides an
                estimated capacity. Please check with your electrician to add
                the exact capacity.
              </p>
            </div>
          </div>
        </h2>
        <div className="w-[40%] max-[1000px]:w-full mx-auto">
          <div className="flex items-center w-full border quote rounded-md bg-[#FFFDF9]">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={(e) => {
                // Prevent negative values
                if (e.target.value >= 0) {
                  handleChange(e); // Call the existing handleChange function only for non-negative values
                }
              }}
              placeholder="Enter Values in kW"
              className="px-4 py-5 text-[16px]  cursor-pointer font-[400] pl-3 rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
        </div>
        {errors.capacity && (
          <p className="text-red-500 text-sm mt-1 pl-4 text-center">
            {errors.capacity}
          </p>
        )}
      </div>

      {/*----auto location----*/}
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6 mt-6">
          Location Details
        </h2>
        <div className="auto-bg" style={{ position: "relative" }}>
          <div className="flex justify-between">
            <div className="w-[80%]">
              <StandaloneSearchBox
                onLoad={(ref) => (searchBoxRef.current = ref)}
                onPlacesChanged={onPlacesChanged}
              >
                <input
                  type="text"
                  placeholder="Search for a place"
                  className="px-4 py-5 text-[16px] font-[400] w-2/3 self-center rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                  style={{ marginTop: "20px", marginLeft: "2rem" }}
                />
              </StandaloneSearchBox>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter Your Location"
                className="hidden px-4 py-5 text-[16px] font-[400] w-[90%] mt-[3%] ml-[2%] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                readOnly // makes the input field read-only
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1 pl-9">
                  {errors.location}
                </p>
              )}
            </div>
            <div className="w-[20%] mt-[3%]">
              <button
                className="flex flex-col items-center bg-white text-[#8A6112] py-2 px-4"
                onClick={getCurrentLocation}
              >
                <CiLocationArrow1 size={24} />
                <span className="text-sm">Auto Location</span>
              </button>
            </div>
          </div>

          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={markerPosition}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            <Marker
              position={markerPosition}
              draggable={true}
              onDragEnd={onMarkerDragEnd}
            />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default CapacitytoInstall;
