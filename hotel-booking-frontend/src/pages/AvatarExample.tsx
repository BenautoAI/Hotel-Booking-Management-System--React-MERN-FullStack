import { Avatar } from "../components/ui/avatar";

const AvatarExample = () => {
  const avatarImageUrl = "/vite.svg"; // Using existing asset

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-8">
          Avatar Component
        </h1>

        {/* Size Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            Size Variants
          </h2>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm" alt="John Doe" variant="gradient" />
              <span className="text-sm text-muted">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="md" alt="Jane Smith" variant="gradient" />
              <span className="text-sm text-muted">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg" alt="Bob Johnson" variant="gradient" />
              <span className="text-sm text-muted">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="xl" alt="Alice Williams" variant="gradient" />
              <span className="text-sm text-muted">Extra Large</span>
            </div>
          </div>
        </section>

        {/* Gradient Border Variant */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            Gradient Border
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar
                src={avatarImageUrl}
                alt="User with image"
                size="lg"
                variant="gradient"
              />
              <span className="text-sm text-muted">With Image</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                alt="John Doe"
                size="lg"
                variant="gradient"
                fallback="John Doe"
              />
              <span className="text-sm text-muted">Fallback Initials</span>
            </div>
          </div>
        </section>

        {/* Default Border Variant */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            Default Border
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar
                src={avatarImageUrl}
                alt="User with image"
                size="lg"
                variant="default"
              />
              <span className="text-sm text-muted">With Image</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                alt="Jane Smith"
                size="lg"
                variant="default"
                fallback="Jane Smith"
              />
              <span className="text-sm text-muted">Fallback Initials</span>
            </div>
          </div>
        </section>

        {/* Real-world Example with Image */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            Real-world Example
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-border-default p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
                alt="Sarah Johnson"
                size="lg"
                variant="gradient"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary-600">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-muted">Premium Member</p>
                <p className="text-sm text-disabled">
                  Member since March 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User List Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            User List
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-border-default divide-y divide-border-default">
            {[
              {
                name: "John Doe",
                email: "john.doe@example.com",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                image: "",
              },
              {
                name: "Bob Johnson",
                email: "bob.johnson@example.com",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              },
              {
                name: "Alice Williams",
                email: "alice.williams@example.com",
                image: "",
              },
            ].map((user, index) => (
              <div key={index} className="flex items-center gap-4 p-4">
                <Avatar
                  src={user.image}
                  alt={user.name}
                  size="md"
                  variant="gradient"
                  fallback={user.name}
                />
                <div>
                  <h4 className="text-sm font-semibold text-primary-600">
                    {user.name}
                  </h4>
                  <p className="text-sm text-muted">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AvatarExample;
