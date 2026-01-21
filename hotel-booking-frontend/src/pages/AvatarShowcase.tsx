import React from "react";
import HotelAvatar from "../components/HotelAvatar";
import UserAvatar from "../components/UserAvatar";
import { Avatar } from "../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building2, User } from "lucide-react";

const AvatarShowcase: React.FC = () => {
  // Sample hotel data
  const sampleHotels = [
    {
      name: "Grand Plaza Hotel",
      imageUrl: "/data/hotel_images/pexels-pixabay-258154.jpg",
      rating: 5,
    },
    {
      name: "Ocean View Resort",
      imageUrl: "/data/hotel_images/pexels-pixabay-261101.jpg",
      rating: 4,
    },
    {
      name: "Mountain Lodge",
      imageUrl: "/data/hotel_images/pexels-pixabay-460537.jpg",
      rating: 4,
    },
    {
      name: "City Center Inn",
      imageUrl: "", // No image to show fallback
      rating: 3,
    },
  ];

  // Sample user data
  const sampleUsers = [
    { firstName: "John", lastName: "Doe", imageUrl: "" },
    { firstName: "Jane", lastName: "Smith", imageUrl: "" },
    { firstName: "Alice", lastName: "Johnson", imageUrl: "" },
    { firstName: "", lastName: "", imageUrl: "" }, // Empty to show icon fallback
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Avatar Components Showcase
          </h1>
          <p className="text-gray-600">
            Demonstrating hotel and user avatar components with various sizes and options
          </p>
        </div>

        {/* Hotel Avatars Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              Hotel Avatars
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Different Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Size Variations</h3>
              <div className="flex flex-wrap items-end gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Small</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="sm"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Default</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="default"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Medium</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="md"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Large</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">XL</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">2XL</Badge>
                  <HotelAvatar
                    hotelName="Grand Plaza Hotel"
                    imageUrl={sampleHotels[0].imageUrl}
                    size="2xl"
                  />
                </div>
              </div>
            </div>

            {/* With Star Rating */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">With Star Ratings</h3>
              <div className="flex flex-wrap gap-6">
                {sampleHotels.map((hotel, index) => (
                  <HotelAvatar
                    key={index}
                    hotelName={hotel.name}
                    imageUrl={hotel.imageUrl}
                    size="lg"
                    starRating={hotel.rating}
                    showRating={true}
                  />
                ))}
              </div>
            </div>

            {/* Clickable Avatars */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Interactive (Clickable)
              </h3>
              <div className="flex flex-wrap gap-6">
                {sampleHotels.slice(0, 3).map((hotel, index) => (
                  <HotelAvatar
                    key={index}
                    hotelName={hotel.name}
                    imageUrl={hotel.imageUrl}
                    size="xl"
                    starRating={hotel.rating}
                    showRating={true}
                    onClick={() => alert(`Clicked ${hotel.name}`)}
                  />
                ))}
              </div>
            </div>

            {/* Fallback Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Fallback (No Image)
              </h3>
              <div className="flex flex-wrap gap-6">
                <HotelAvatar
                  hotelName="City Center Inn"
                  imageUrl=""
                  size="lg"
                  starRating={3}
                  showRating={true}
                />
                <HotelAvatar
                  hotelName="Boutique Hotel"
                  size="xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Avatars Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary-600" />
              User Avatars
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Different Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Size Variations</h3>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Small</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="sm"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Default</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="default"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Medium</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="md"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">Large</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">XL</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="outline">2XL</Badge>
                  <UserAvatar
                    firstName="John"
                    lastName="Doe"
                    size="2xl"
                  />
                </div>
              </div>
            </div>

            {/* Different Users */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">User Examples</h3>
              <div className="flex flex-wrap gap-6">
                {sampleUsers.map((user, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <UserAvatar
                      firstName={user.firstName}
                      lastName={user.lastName}
                      imageUrl={user.imageUrl}
                      size="lg"
                    />
                    <p className="text-sm text-gray-600">
                      {user.firstName || user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : "Anonymous"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clickable User Avatars */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Interactive User Avatars
              </h3>
              <div className="flex flex-wrap gap-6">
                {sampleUsers.slice(0, 3).map((user, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <UserAvatar
                      firstName={user.firstName}
                      lastName={user.lastName}
                      imageUrl={user.imageUrl}
                      size="xl"
                      onClick={() =>
                        alert(`Clicked ${user.firstName} ${user.lastName}`)
                      }
                    />
                    <p className="text-sm text-gray-600">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Base Avatar Component */}
        <Card>
          <CardHeader>
            <CardTitle>Base Avatar Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Custom Fallback Content
              </h3>
              <div className="flex flex-wrap gap-6">
                <Avatar
                  size="lg"
                  fallback={<Building2 className="h-8 w-8 text-white" />}
                />
                <Avatar
                  size="lg"
                  fallback={<User className="h-8 w-8 text-white" />}
                />
                <Avatar
                  size="lg"
                  alt="Test User"
                  fallback={<span className="text-xl font-bold">TU</span>}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Example Section */}
        <Card className="mt-8 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardHeader>
            <CardTitle className="text-primary-900">Integration Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Header Navigation</h4>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-primary-600" />
                    <span className="font-bold text-primary-600">MernHolidays</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Welcome, John Doe</span>
                    <UserAvatar
                      firstName="John"
                      lastName="Doe"
                      size="default"
                      onClick={() => alert("User profile clicked")}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Hotel Search Results</h4>
                <div className="bg-white rounded-lg p-4 space-y-3 shadow-sm">
                  {sampleHotels.slice(0, 2).map((hotel, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <HotelAvatar
                        hotelName={hotel.name}
                        imageUrl={hotel.imageUrl}
                        size="md"
                        starRating={hotel.rating}
                        showRating={true}
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">{hotel.name}</h5>
                        <p className="text-sm text-gray-500">Premium Location</p>
                      </div>
                      <span className="text-primary-600 font-bold">$299/night</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AvatarShowcase;
