import type { Preview } from '@storybook/react-vite'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../src/contexts/AppContext';
import { SearchContextProvider } from '../src/contexts/SearchContext';
import { http, HttpResponse } from 'msw';
import { initialize } from 'msw-storybook-addon';
import '../src/index.css';

// Mock hotel data for stories
const mockHotels = [
  {
    _id: '1',
    userId: 'user1',
    name: 'Luxury Plaza Hotel',
    city: 'London',
    country: 'United Kingdom',
    description: 'A premium hotel with world-class amenities',
    type: ['Luxury', 'Business'],
    adultCount: 4,
    childCount: 0,
    facilities: ['WiFi', 'Gym', 'Spa', 'Restaurant'],
    pricePerNight: 250,
    starRating: 5,
    imageUrls: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=350&fit=crop',
    ],
    lastUpdated: new Date().toISOString(),
  },
  {
    _id: '2',
    userId: 'user2',
    name: 'Beachside Resort',
    city: 'Miami',
    country: 'United States',
    description: 'Beautiful beachfront resort with water sports',
    type: ['Resort', 'Beach'],
    adultCount: 6,
    childCount: 2,
    facilities: ['Pool', 'Beach Access', 'Restaurant', 'Bar'],
    pricePerNight: 180,
    starRating: 4,
    imageUrls: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=350&fit=crop',
    ],
    lastUpdated: new Date().toISOString(),
  },
  {
    _id: '3',
    userId: 'user3',
    name: 'Mountain Retreat',
    city: 'Aspen',
    country: 'United States',
    description: 'Cozy lodge nestled in the mountains',
    type: ['Resort', 'Mountain'],
    adultCount: 4,
    childCount: 0,
    facilities: ['Fireplace', 'Hiking', 'Skiing'],
    pricePerNight: 200,
    starRating: 4.5,
    imageUrls: [
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=500&h=350&fit=crop',
    ],
    lastUpdated: new Date().toISOString(),
  },
];

// Initialize MSW with mock handlers
initialize(
  { onUnhandledRequest: 'bypass' },
  [
    http.get('*/api/hotels', () => {
      return HttpResponse.json(mockHotels);
    }),
    http.get('*/api/users/me', () => {
      return HttpResponse.json(null, { status: 401 });
    }),
    http.post('*/api/auth/validate', () => {
      return HttpResponse.json(null, { status: 401 });
    }),
  ]
);

// Create a queryClient instance for Storybook stories
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 0,
      cacheTime: 0,
    },
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;
