/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Footer from "../components/Footer";

const FooterRender = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Footer Component Showcase</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Footer component below demonstrates a fully-featured footer with company info,
            quick links, support resources, and contact details. It features a responsive grid
            layout that adapts from 1 column on mobile to 4 columns on desktop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="mr-3">✓</span> Responsive grid layout</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Social media links</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Contact information</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Policy links</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Copyright section</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="mr-3">✓</span> Gradient background</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Lucide React icons</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Hover animations</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Mobile-first approach</li>
                <li className="flex items-center"><span className="mr-3">✓</span> Tailwind CSS styling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FooterRender;
