/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

// Main demo component showing Header
// App.tsx already provides Router, AppContext, SearchContext, and QueryClientProvider
// Layout already renders <Header /> so we just show the demo content below it
const HeaderDemo = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Header Component Demo
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>
              This demonstrates the Header component with all its features:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Logged In State:</strong> Shows navigation links to Analytics, My Bookings, My Hotels, API Docs, API Status, and Sign Out dropdown</li>
              <li><strong>Logged Out State:</strong> Shows only the Sign In button</li>
              <li><strong>Mobile Menu:</strong> Responsive hamburger menu for mobile devices (resize browser to see)</li>
              <li><strong>Logo Navigation:</strong> Click the logo to navigate home and clear search values</li>
              <li><strong>Interactive Elements:</strong> All links and buttons are functional with hover effects</li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Try it out:</p>
              <ul className="list-disc list-inside mt-2 text-blue-800">
                <li>Resize your browser to see the mobile menu</li>
                <li>Hover over navigation items to see animations</li>
                <li>Click the Sign Out button dropdown in logged-in state</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo;
