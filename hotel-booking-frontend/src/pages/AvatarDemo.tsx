import React from 'react';
import { Avatar } from '../components/Avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

/**
 * Demo page showcasing the Avatar component in various sizes and contexts
 */
const AvatarDemo: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Avatar Component Demo</h1>
        <p className="text-muted-foreground">
          Wizard mascot avatar for the Vite hotel booking application
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
            <CardDescription>
              Available sizes: sm, md, lg, xl
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar size="sm" />
              <span className="text-sm text-muted-foreground">Small (32px)</span>
            </div>
            <div className="flex items-center gap-4">
              <Avatar size="md" />
              <span className="text-sm text-muted-foreground">
                Medium (48px)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Avatar size="lg" />
              <span className="text-sm text-muted-foreground">Large (64px)</span>
            </div>
            <div className="flex items-center gap-4">
              <Avatar size="xl" />
              <span className="text-sm text-muted-foreground">
                Extra Large (96px)
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Profile Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Usage</CardTitle>
            <CardDescription>Avatar in user profile context</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Avatar size="lg" />
              <div>
                <h3 className="font-semibold text-lg">Wizard Admin</h3>
                <p className="text-sm text-muted-foreground">
                  admin@hotelbooking.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Hotel Booking Manager
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Usage</CardTitle>
            <CardDescription>Avatar in header navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-primary-900 text-white">
              <div className="flex items-center gap-3">
                <Avatar size="sm" />
                <span className="font-medium">Hotel Booking</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm">My Account</span>
                <Avatar size="sm" className="cursor-pointer hover:opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logo Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Logo/Branding Usage</CardTitle>
            <CardDescription>Avatar as application logo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-gradient-to-br from-primary-50 to-primary-100">
              <Avatar size="xl" className="mb-4" />
              <h2 className="text-2xl font-bold text-center">
                Wizard Hotel Booking
              </h2>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Your magical stay awaits
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Custom Styling */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Styling</CardTitle>
            <CardDescription>Avatar with custom classes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar
                size="md"
                className="rounded-full border-4 border-primary-600"
              />
              <span className="text-sm text-muted-foreground">
                Rounded with border
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                size="md"
                className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">
                With shadow and hover
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Avatar size="md" className="opacity-50 grayscale" />
              <span className="text-sm text-muted-foreground">
                Inactive state
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Multiple avatars in a row</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar size="md" />
              <Avatar size="md" className="opacity-80" />
              <Avatar size="md" className="opacity-60" />
              <Avatar size="md" className="opacity-40" />
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                +5
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Team members online
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Code */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
          <CardDescription>
            How to use the Avatar component in your code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
            <div>
              <span className="text-blue-600">import</span>{' '}
              <span className="text-green-600">{'{ Avatar }'}</span>{' '}
              <span className="text-blue-600">from</span>{' '}
              <span className="text-orange-600">'@/components/Avatar'</span>;
            </div>
            <div className="mt-4">
              <div>
                <span className="text-gray-600">{'// Default size (md)'}</span>
              </div>
              <div>
                <span className="text-purple-600">{'<Avatar />'}</span>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <span className="text-gray-600">
                  {'// With custom size and styling'}
                </span>
              </div>
              <div>
                <span className="text-purple-600">{'<Avatar'}</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-600">size</span>=
                <span className="text-orange-600">"lg"</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-600">className</span>=
                <span className="text-orange-600">"rounded-full shadow-lg"</span>
              </div>
              <div>
                <span className="text-purple-600">{'/>'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvatarDemo;
