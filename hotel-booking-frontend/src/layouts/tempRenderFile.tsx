/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Layout from "./Layout";

const LayoutRender = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 border-2 border-red-500 inline-block p-2">
            Welcome to MernHolidays
          </h1>
          <p className="text-gray-600 text-lg">
            This is a sample page demonstrating the Layout component.
            The Layout provides consistent header navigation and footer
            across all pages of the application.
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-gray-700">
              The header includes navigation links for authenticated
              users (Analytics, My Bookings, My Hotels, API Docs, API
              Status) or a Sign In button for guests.
            </p>
            <p className="text-gray-700">
              The footer displays company information, quick links,
              support resources, and contact details.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LayoutRender;
