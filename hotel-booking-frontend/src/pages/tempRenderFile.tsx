/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import { HotelType } from "../../../shared/types";

// Create a mock QueryClient for this render
const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// Mock hotel data matching the HotelType structure
const mockHotels: HotelType[] = [
  {
    _id: "hotel1",
    userId: "user1",
    name: "Grand Seaside Resort",
    city: "Miami",
    country: "United States",
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
    type: ["Resort", "Beach Hotel"],
    adultCount: 4,
    childCount: 2,
    facilities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"],
    pricePerNight: 299,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-15"),
    location: {
      latitude: 25.7617,
      longitude: -80.1918,
      address: {
        street: "1234 Ocean Drive",
        city: "Miami",
        state: "Florida",
        country: "United States",
        zipCode: "33139"
      }
    },
    contact: {
      phone: "+1-305-555-0100",
      email: "info@grandseaside.com",
      website: "https://grandseaside.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in",
      petPolicy: "Pets allowed with additional fee",
      smokingPolicy: "Non-smoking property"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 1250,
    totalRevenue: 374250,
    averageRating: 4.8,
    reviewCount: 342,
    occupancyRate: 85,
    isActive: true,
    isFeatured: true,
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2024-01-15")
  },
  {
    _id: "hotel2",
    userId: "user2",
    name: "Mountain View Lodge",
    city: "Aspen",
    country: "United States",
    description: "Cozy mountain retreat perfect for skiing enthusiasts and nature lovers.",
    type: ["Lodge", "Ski Resort"],
    adultCount: 2,
    childCount: 1,
    facilities: ["WiFi", "Parking", "Restaurant", "Gym", "Ski Storage"],
    pricePerNight: 189,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-10"),
    contact: {
      phone: "+1-970-555-0200",
      email: "reservations@mountainview.com",
      website: "https://mountainviewlodge.com"
    },
    policies: {
      checkInTime: "16:00",
      checkOutTime: "10:00",
      cancellationPolicy: "Free cancellation up to 48 hours before check-in",
      petPolicy: "No pets allowed",
      smokingPolicy: "Non-smoking rooms available"
    },
    isActive: true,
    isFeatured: false
  },
  {
    _id: "hotel3",
    userId: "user3",
    name: "Urban Boutique Hotel",
    city: "New York",
    country: "United States",
    description: "Modern boutique hotel in the heart of Manhattan with contemporary design.",
    type: ["Boutique", "Hotel"],
    adultCount: 2,
    childCount: 0,
    facilities: ["WiFi", "Restaurant", "Bar", "Business Center", "Gym"],
    pricePerNight: 349,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-12"),
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: {
        street: "789 Fifth Avenue",
        city: "New York",
        state: "New York",
        country: "United States",
        zipCode: "10022"
      }
    },
    contact: {
      phone: "+1-212-555-0300",
      email: "contact@urbanboutique.com",
      website: "https://urbanboutique.com"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 890,
    totalRevenue: 310510,
    averageRating: 4.6,
    reviewCount: 215,
    isActive: true,
    isFeatured: true
  },
  {
    _id: "hotel4",
    userId: "user4",
    name: "Tropical Paradise Resort",
    city: "Honolulu",
    country: "United States",
    description: "Beachfront paradise with palm trees, crystal clear waters, and Hawaiian hospitality.",
    type: ["Resort", "Beach Hotel"],
    adultCount: 6,
    childCount: 3,
    facilities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Beach Access", "Water Sports"],
    pricePerNight: 425,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-14"),
    policies: {
      checkInTime: "14:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation up to 7 days before check-in",
      petPolicy: "No pets allowed",
      smokingPolicy: "Non-smoking property"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: false
    },
    isActive: true,
    isFeatured: true
  },
  {
    _id: "hotel5",
    userId: "user5",
    name: "Historic Downtown Inn",
    city: "Boston",
    country: "United States",
    description: "Charming historic inn with colonial architecture and modern comforts.",
    type: ["B&B", "Historic Hotel"],
    adultCount: 2,
    childCount: 0,
    facilities: ["WiFi", "Restaurant", "Parking", "Breakfast Included"],
    pricePerNight: 159,
    starRating: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-08"),
    contact: {
      phone: "+1-617-555-0400",
      email: "stay@downtowninn.com",
      website: "https://historicdowntowninn.com"
    },
    isActive: true,
    isFeatured: false
  },
  {
    _id: "hotel6",
    userId: "user6",
    name: "Desert Oasis Spa Resort",
    city: "Phoenix",
    country: "United States",
    description: "Luxurious desert retreat with world-class spa and stunning sunset views.",
    type: ["Resort", "Spa Hotel"],
    adultCount: 4,
    childCount: 0,
    facilities: ["WiFi", "Pool", "Spa", "Restaurant", "Golf Course", "Yoga Studio"],
    pricePerNight: 275,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop"
    ],
    lastUpdated: new Date("2024-01-13"),
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: false
    },
    totalBookings: 650,
    totalRevenue: 178750,
    averageRating: 4.9,
    reviewCount: 189,
    isActive: true,
    isFeatured: true
  }
];

// Set the mock data in the QueryClient cache
mockQueryClient.setQueryData("fetchQuery", mockHotels);

const HomeRender = () => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default HomeRender;
