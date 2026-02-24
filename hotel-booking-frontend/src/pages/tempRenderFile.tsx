/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import { HotelType } from "../../../shared/types";

// Create a mock QueryClient for the render
const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      // Set stale time to prevent refetching
      staleTime: Infinity,
    },
  },
});

// Mock hotel data matching HotelType interface
const mockHotels: HotelType[] = [
  {
    _id: "1",
    userId: "user1",
    name: "Seaside Resort & Spa",
    city: "Miami",
    country: "USA",
    description: "Luxury beachfront resort with world-class amenities",
    type: ["Resort", "Luxury", "Beach"],
    adultCount: 4,
    childCount: 2,
    facilities: ["Pool", "WiFi", "Spa", "Restaurant", "Beach Access"],
    pricePerNight: 299,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-15"),
  },
  {
    _id: "2",
    userId: "user2",
    name: "Mountain View Lodge",
    city: "Aspen",
    country: "USA",
    description: "Cozy mountain retreat with stunning alpine views",
    type: ["Lodge", "Mountain", "Family-Friendly"],
    adultCount: 6,
    childCount: 3,
    facilities: ["WiFi", "Parking", "Fireplace", "Ski Storage", "Restaurant"],
    pricePerNight: 199,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-14"),
  },
  {
    _id: "3",
    userId: "user3",
    name: "Downtown Boutique Hotel",
    city: "New York",
    country: "USA",
    description: "Modern boutique hotel in the heart of Manhattan",
    type: ["Boutique", "City Center", "Business"],
    adultCount: 2,
    childCount: 0,
    facilities: ["WiFi", "Gym", "Bar", "Business Center", "Rooftop Terrace"],
    pricePerNight: 349,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-13"),
  },
  {
    _id: "4",
    userId: "user4",
    name: "Tropical Paradise Resort",
    city: "Bali",
    country: "Indonesia",
    description: "Exotic island resort surrounded by lush tropical gardens",
    type: ["Resort", "Tropical", "Romantic"],
    adultCount: 4,
    childCount: 2,
    facilities: ["Pool", "WiFi", "Spa", "Beach Access", "Restaurant", "Bar"],
    pricePerNight: 249,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-12"),
  },
  {
    _id: "5",
    userId: "user5",
    name: "Historic City Hotel",
    city: "London",
    country: "UK",
    description: "Elegant Victorian hotel with classic British charm",
    type: ["Historic", "City Center", "Luxury"],
    adultCount: 3,
    childCount: 1,
    facilities: ["WiFi", "Restaurant", "Bar", "Concierge", "Room Service"],
    pricePerNight: 279,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-11"),
  },
  {
    _id: "6",
    userId: "user6",
    name: "Desert Oasis Hotel",
    city: "Dubai",
    country: "UAE",
    description: "Modern luxury hotel with breathtaking desert views",
    type: ["Luxury", "Modern", "Desert"],
    adultCount: 5,
    childCount: 2,
    facilities: ["Pool", "WiFi", "Spa", "Gym", "Restaurant", "Airport Shuttle"],
    pricePerNight: 399,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
    ],
    lastUpdated: new Date("2024-01-10"),
  },
];

// Pre-populate the query cache with mock data
mockQueryClient.setQueryData("fetchQuery", mockHotels);

const HomeRender = () => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default HomeRender;
