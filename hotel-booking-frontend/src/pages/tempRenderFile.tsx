/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import Footer from "../components/Footer";
import { HotelType } from "../../../shared/types";

// Create a standalone QueryClient for the render file
const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

// Mock hotel data matching HotelType structure
const mockHotels: HotelType[] = [
  {
    _id: "1",
    userId: "user123",
    name: "Grand Plaza Hotel",
    city: "London",
    country: "United Kingdom",
    description: "Luxury hotel in the heart of London with stunning views",
    type: ["Hotel", "Luxury"],
    adultCount: 2,
    childCount: 1,
    facilities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant"],
    pricePerNight: 250,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    ],
    lastUpdated: new Date("2024-01-15"),
  },
  {
    _id: "2",
    userId: "user456",
    name: "Seaside Resort & Spa",
    city: "Maldives",
    country: "Maldives",
    description: "Tropical paradise with overwater bungalows",
    type: ["Resort", "Beach"],
    adultCount: 4,
    childCount: 2,
    facilities: ["WiFi", "Pool", "Beach Access", "Spa", "Water Sports"],
    pricePerNight: 450,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    lastUpdated: new Date("2024-01-20"),
  },
  {
    _id: "3",
    userId: "user789",
    name: "Mountain View Lodge",
    city: "Aspen",
    country: "United States",
    description: "Cozy mountain retreat with ski-in ski-out access",
    type: ["Lodge", "Ski Resort"],
    adultCount: 3,
    childCount: 1,
    facilities: ["WiFi", "Fireplace", "Ski Storage", "Restaurant", "Bar"],
    pricePerNight: 320,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    lastUpdated: new Date("2024-01-18"),
  },
  {
    _id: "4",
    userId: "user101",
    name: "Urban Boutique Hotel",
    city: "New York",
    country: "United States",
    description: "Modern boutique hotel in Manhattan",
    type: ["Boutique", "Hotel"],
    adultCount: 2,
    childCount: 0,
    facilities: ["WiFi", "Rooftop Bar", "Gym", "Business Center"],
    pricePerNight: 280,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    ],
    lastUpdated: new Date("2024-01-22"),
  },
  {
    _id: "5",
    userId: "user202",
    name: "Historic Palace Hotel",
    city: "Paris",
    country: "France",
    description: "Restored 18th century palace near the Louvre",
    type: ["Historic", "Luxury", "Hotel"],
    adultCount: 2,
    childCount: 1,
    facilities: ["WiFi", "Fine Dining", "Spa", "Concierge", "Valet"],
    pricePerNight: 380,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    ],
    lastUpdated: new Date("2024-01-25"),
  },
  {
    _id: "6",
    userId: "user303",
    name: "Eco-Friendly Rainforest Retreat",
    city: "Costa Rica",
    country: "Costa Rica",
    description: "Sustainable jungle lodge with wildlife tours",
    type: ["Eco-Lodge", "Resort"],
    adultCount: 2,
    childCount: 2,
    facilities: ["WiFi", "Nature Tours", "Organic Restaurant", "Yoga Studio"],
    pricePerNight: 190,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
    ],
    lastUpdated: new Date("2024-01-28"),
  },
];

// Pre-populate the query cache with mock data
mockQueryClient.setQueryData("fetchQuery", mockHotels);

const HomeRender = () => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      <Home />
      <Footer />
    </QueryClientProvider>
  );
};

export default HomeRender;
