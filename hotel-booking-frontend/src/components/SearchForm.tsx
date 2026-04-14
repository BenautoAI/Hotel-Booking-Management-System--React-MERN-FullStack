import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search as SearchIcon,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import useSearchContext from "../hooks/useSearchContext";
import PriceRangeInput from "./PriceRangeInput";

interface SearchFormProps {
  onSearch: (searchData: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const search = useSearchContext();
  const [searchData, setSearchData] = useState({
    destination: search.destination,
    checkIn: search.checkIn,
    checkOut: search.checkOut,
    adultCount: search.adultCount,
    childCount: search.childCount,
    minPrice: "",
    maxPrice: "",
    starRating: "",
    hotelType: "",
    facilities: [] as string[],
    sortBy: "relevance",
    radius: "50",
    instantBooking: false,
    freeCancellation: false,
    breakfast: false,
    wifi: false,
    parking: false,
    pool: false,
    gym: false,
    spa: false,
  });

  // Dropdown functionality for destination
  const [showDropdown, setShowDropdown] = useState(false);
  const [places, setPlaces] = useState<string[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<string[]>([]);
  const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);
  const hasFetchedRef = useRef(false);

  // Rental period state for UI display (Hourly/Monthly buttons)
  const [rentalPeriod, setRentalPeriod] = useState<"hourly" | "monthly">(
    "monthly"
  );

  // Fetch hotel places on mount
  useEffect(() => {
    if (isLoadingPlaces || hasFetchedRef.current) return;

    const fetchPlaces = async () => {
      try {
        setIsLoadingPlaces(true);
        hasFetchedRef.current = true;

        // Check if we have cached places data
        const cachedPlaces = localStorage.getItem("hotelPlaces");
        if (cachedPlaces) {
          const parsedPlaces = JSON.parse(cachedPlaces);
          const cacheTime = localStorage.getItem("hotelPlacesTime");
          const now = Date.now();

          // Cache is valid for 5 minutes
          if (cacheTime && now - parseInt(cacheTime) < 5 * 60 * 1000) {
            setPlaces(parsedPlaces);
            setIsLoadingPlaces(false);
            return;
          }
        }

        const apiBaseUrl =
          import.meta.env.VITE_API_BASE_URL || "http://localhost:7002";
        const response = await fetch(`${apiBaseUrl}/api/hotels`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: { city?: string; place?: string; name?: string }[] =
          await response.json();
        const uniquePlaces: string[] = Array.from(
          new Set(
            data
              .map((hotel) => hotel.city || hotel.place || hotel.name)
              .filter(
                (place): place is string =>
                  typeof place === "string" && place.length > 0
              )
          )
        );

        // Cache the places data
        localStorage.setItem("hotelPlaces", JSON.stringify(uniquePlaces));
        localStorage.setItem("hotelPlacesTime", Date.now().toString());

        setPlaces(uniquePlaces);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setPlaces([]);
      } finally {
        setIsLoadingPlaces(false);
      }
    };

    fetchPlaces();
  }, []);

  // Clear dropdown state when component mounts
  useEffect(() => {
    setShowDropdown(false);
    setFilteredPlaces([]);
  }, []);

  // Filter places as user types
  useEffect(() => {
    if (searchData.destination.length > 0) {
      const filtered = places.filter((place) =>
        place.toLowerCase().includes(searchData.destination.toLowerCase())
      );
      setFilteredPlaces(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false);
    }
  }, [searchData.destination, places]);

  const hotelTypes = [
    "Hotel",
    "Resort",
    "Motel",
    "Hostel",
    "Apartment",
    "Villa",
    "Cottage",
    "B&B",
  ];

  const spaceTypes = [
    "Studio",
    "1 Bedroom",
    "2 Bedrooms",
    "3+ Bedrooms",
    "Entire Place",
  ];

  const handleInputChange = (field: string, value: any) => {
    setSearchData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    // Only proceed if destination is not empty
    if (!searchData.destination || searchData.destination.trim() === "") {
      // Show all hotels when destination is empty
      search.saveSearchValues(
        "",
        searchData.checkIn,
        searchData.checkOut,
        searchData.adultCount,
        searchData.childCount
      );

      // Close dropdown before navigation
      setShowDropdown(false);
      setFilteredPlaces([]);

      // Navigate to search page with advanced filters
      const searchParams = new URLSearchParams();
      searchParams.append("destination", "");
      searchParams.append("checkIn", searchData.checkIn.toISOString());
      searchParams.append("checkOut", searchData.checkOut.toISOString());
      searchParams.append("adultCount", searchData.adultCount.toString());
      searchParams.append("childCount", searchData.childCount.toString());

      // Add advanced filters
      if (searchData.minPrice)
        searchParams.append("minPrice", searchData.minPrice);
      if (searchData.maxPrice)
        searchParams.append("maxPrice", searchData.maxPrice);
      if (searchData.starRating)
        searchParams.append("starRating", searchData.starRating);
      if (searchData.hotelType)
        searchParams.append("hotelType", searchData.hotelType);
      if (searchData.sortBy) searchParams.append("sortBy", searchData.sortBy);
      if (searchData.radius) searchParams.append("radius", searchData.radius);
      searchData.facilities.forEach((facility) =>
        searchParams.append("facilities", facility)
      );

      navigate(`/search?${searchParams.toString()}`);
      onSearch(searchData);

      setTimeout(() => {
        setSearchData({
          destination: "",
          checkIn: new Date(),
          checkOut: new Date(),
          adultCount: 1,
          childCount: 0,
          minPrice: "",
          maxPrice: "",
          starRating: "",
          hotelType: "",
          facilities: [],
          sortBy: "relevance",
          radius: "50",
          instantBooking: false,
          freeCancellation: false,
          breakfast: false,
          wifi: false,
          parking: false,
          pool: false,
          gym: false,
          spa: false,
        });
      }, 100);
      return;
    }

    // Update search context
    search.saveSearchValues(
      searchData.destination.trim(),
      searchData.checkIn,
      searchData.checkOut,
      searchData.adultCount,
      searchData.childCount
    );

    // Close dropdown before navigation
    setShowDropdown(false);
    setFilteredPlaces([]);

    // Navigate to search page with advanced filters
    const searchParams = new URLSearchParams();
    searchParams.append("destination", searchData.destination.trim());
    searchParams.append("checkIn", searchData.checkIn.toISOString());
    searchParams.append("checkOut", searchData.checkOut.toISOString());
    searchParams.append("adultCount", searchData.adultCount.toString());
    searchParams.append("childCount", searchData.childCount.toString());

    // Add advanced filters
    if (searchData.minPrice)
      searchParams.append("minPrice", searchData.minPrice);
    if (searchData.maxPrice)
      searchParams.append("maxPrice", searchData.maxPrice);
    if (searchData.starRating)
      searchParams.append("starRating", searchData.starRating);
    if (searchData.hotelType)
      searchParams.append("hotelType", searchData.hotelType);
    if (searchData.sortBy) searchParams.append("sortBy", searchData.sortBy);
    if (searchData.radius) searchParams.append("radius", searchData.radius);
    searchData.facilities.forEach((facility) =>
      searchParams.append("facilities", facility)
    );

    navigate(`/search?${searchParams.toString()}`);
    onSearch(searchData);

    setTimeout(() => {
      setSearchData({
        destination: "",
        checkIn: new Date(),
        checkOut: new Date(),
        adultCount: 1,
        childCount: 0,
        minPrice: "",
        maxPrice: "",
        starRating: "",
        hotelType: "",
        facilities: [],
        sortBy: "relevance",
        radius: "50",
        instantBooking: false,
        freeCancellation: false,
        breakfast: false,
        wifi: false,
        parking: false,
        pool: false,
        gym: false,
        spa: false,
      });
    }, 100);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto border border-gray-100">
      {/* Location, Property Type, Rental Period, Space Type Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-gray-600" />
            Location
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              value={searchData.destination}
              onChange={(e) => handleInputChange("destination", e.target.value)}
              onFocus={() => setShowDropdown(filteredPlaces.length > 0)}
              onBlur={() => setShowDropdown(false)}
            />
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            {showDropdown && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                {filteredPlaces.map((place) => (
                  <li
                    key={place}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                    onMouseDown={() => {
                      handleInputChange("destination", place);
                      setShowDropdown(false);
                    }}
                  >
                    {place}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Property Type
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={searchData.hotelType}
            onChange={(e) => handleInputChange("hotelType", e.target.value)}
          >
            <option value="">Any Type</option>
            {hotelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Rental Period (Hourly/Monthly Toggle) */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Rental Period
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setRentalPeriod("hourly")}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                rentalPeriod === "hourly"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Hourly
            </button>
            <button
              onClick={() => setRentalPeriod("monthly")}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                rentalPeriod === "monthly"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Space Type */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Space Type
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
          >
            <option value="">Select Space</option>
            {spaceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Check-in, Check-out, Guests, Price Range Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Check-in Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-600" />
            Check-in
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={searchData.checkIn.toISOString().split("T")[0]}
            onChange={(e) =>
              handleInputChange("checkIn", new Date(e.target.value))
            }
          />
        </div>

        {/* Check-out Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-600" />
            Check-out
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={searchData.checkOut.toISOString().split("T")[0]}
            onChange={(e) =>
              handleInputChange("checkOut", new Date(e.target.value))
            }
          />
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-600" />
            Guests
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={`${searchData.adultCount} adults, ${searchData.childCount} children`}
            onChange={(e) => {
              const [adults, children] = e.target.value.split(", ");
              handleInputChange("adultCount", parseInt(adults));
              handleInputChange("childCount", parseInt(children));
            }}
          >
            <option value="1 adults, 0 children">1 adult</option>
            <option value="2 adults, 0 children">2 adults</option>
            <option value="1 adults, 1 children">1 adult, 1 child</option>
            <option value="2 adults, 1 children">2 adults, 1 child</option>
            <option value="2 adults, 2 children">2 adults, 2 children</option>
            <option value="3 adults, 0 children">3 adults</option>
            <option value="4 adults, 0 children">4 adults</option>
          </select>
        </div>

        {/* Price Range Component */}
        <div>
          <PriceRangeInput
            minPrice={searchData.minPrice}
            maxPrice={searchData.maxPrice}
            onMinPriceChange={(value) => handleInputChange("minPrice", value)}
            onMaxPriceChange={(value) => handleInputChange("maxPrice", value)}
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSearch}
          className="flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <SearchIcon className="w-4 h-4 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
