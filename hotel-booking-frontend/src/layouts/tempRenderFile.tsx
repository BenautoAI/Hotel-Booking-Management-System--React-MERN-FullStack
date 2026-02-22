/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Layout from "./Layout";

const LayoutRender = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to MernHolidays
          </h1>
          <p className="text-gray-700 leading-relaxed">
            This is a sample page demonstrating the Layout component. The Layout
            wraps all content with a consistent header and footer, and applies
            different padding based on the current route.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Features
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Responsive header with navigation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Dynamic content area with route-based styling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Comprehensive footer with company information</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Flexible children prop for any page content</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Page Content
          </h2>
          <p className="text-gray-700 mb-4">
            This area demonstrates how child content is rendered within the
            layout. The Layout component automatically adjusts padding based on
            whether you're on the home page or other pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Card 1</h3>
              <p className="text-sm text-primary-700">Sample content area</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Card 2</h3>
              <p className="text-sm text-primary-700">Sample content area</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Card 3</h3>
              <p className="text-sm text-primary-700">Sample content area</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LayoutRender;
