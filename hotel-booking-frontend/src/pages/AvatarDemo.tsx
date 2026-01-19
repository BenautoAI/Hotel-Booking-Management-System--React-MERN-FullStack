import React, { useState } from "react";
import Avatar from "../components/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useToast } from "../hooks/use-toast";

const AvatarDemo: React.FC = () => {
  const [userAvatar, setUserAvatar] = useState<string>(
    "https://api.dicebear.com/7.x/avataaars/svg?seed=demo"
  );
  const { toast } = useToast();

  const handleAvatarChange = (newAvatarUrl: string) => {
    setUserAvatar(newAvatarUrl);
    toast({
      variant: "success",
      title: "Avatar Updated!",
      description: "Your avatar has been successfully changed.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Avatar Component Demo
          </h1>
          <p className="text-lg text-gray-600">
            Interactive avatar component with upload and gallery selection
          </p>
        </div>

        {/* Main Demo Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Editable Avatar</CardTitle>
            <CardDescription>
              Hover over the avatar and click to open the editor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <Avatar
                src={userAvatar}
                alt="User Avatar"
                size="xl"
                editable={true}
                onAvatarChange={handleAvatarChange}
              />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Click the avatar to edit
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Upload your own image or choose from gallery
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
            <CardDescription>
              Available avatar sizes: sm, md, lg, xl
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-center gap-8 py-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar
                  src={userAvatar}
                  alt="Small Avatar"
                  size="sm"
                  editable={true}
                  onAvatarChange={handleAvatarChange}
                />
                <span className="text-xs text-gray-600">Small (sm)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar
                  src={userAvatar}
                  alt="Medium Avatar"
                  size="md"
                  editable={true}
                  onAvatarChange={handleAvatarChange}
                />
                <span className="text-xs text-gray-600">Medium (md)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar
                  src={userAvatar}
                  alt="Large Avatar"
                  size="lg"
                  editable={true}
                  onAvatarChange={handleAvatarChange}
                />
                <span className="text-xs text-gray-600">Large (lg)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar
                  src={userAvatar}
                  alt="Extra Large Avatar"
                  size="xl"
                  editable={true}
                  onAvatarChange={handleAvatarChange}
                />
                <span className="text-xs text-gray-600">
                  Extra Large (xl)
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Non-editable Avatars */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Non-editable Avatars</CardTitle>
            <CardDescription>
              Static avatar displays without edit functionality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-6 py-6">
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
                alt="User 1"
                size="lg"
                editable={false}
              />
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2"
                alt="User 2"
                size="lg"
                editable={false}
              />
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3"
                alt="User 3"
                size="lg"
                editable={false}
              />
              <Avatar alt="No Image User" size="lg" editable={false} />
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Common Use Cases</CardTitle>
            <CardDescription>
              Avatar component in different contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* User Profile Header */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar
                  src={userAvatar}
                  alt="Profile"
                  size="xl"
                  editable={true}
                  onAvatarChange={handleAvatarChange}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">john.doe@example.com</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Premium Member
                  </p>
                </div>
              </div>
            </div>

            {/* Comment/Review Section */}
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex gap-3">
                <Avatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer"
                  alt="Reviewer"
                  size="md"
                  editable={false}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">
                      Jane Smith
                    </span>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Great hotel! The room was clean and the staff was very
                    friendly. Highly recommended for anyone visiting the area.
                  </p>
                </div>
              </div>
            </div>

            {/* User List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Active Users</h4>
              {[
                { name: "Alice Johnson", status: "Online" },
                { name: "Bob Williams", status: "Away" },
                { name: "Carol Martinez", status: "Online" },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Avatar
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                    alt={user.name}
                    size="sm"
                    editable={false}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features List */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Component Features</CardTitle>
            <CardDescription>What this avatar component offers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Hover Effect:</strong> Shows edit icon overlay when
                  hovering over editable avatars
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Upload Support:</strong> Users can upload their own
                  image files
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Gallery Selection:</strong> Choose from 9 pre-loaded
                  avatar options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Multiple Sizes:</strong> Four size options (sm, md,
                  lg, xl)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Editable/Non-editable:</strong> Can be configured as
                  static or editable
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Fallback Icon:</strong> Shows user icon when no image
                  is provided
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Modal Editor:</strong> Clean popup interface for
                  changing avatars
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Instant Preview:</strong> See changes immediately
                  before saving
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AvatarDemo;
