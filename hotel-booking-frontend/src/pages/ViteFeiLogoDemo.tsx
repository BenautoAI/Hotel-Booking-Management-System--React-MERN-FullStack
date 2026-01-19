import ViteFeiLogo from "../components/ViteFeiLogo";

const ViteFeiLogoDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Vite + Fei Avatar Logo
          </h1>
          <p className="text-lg text-gray-600">
            Combined Vite logo with the Fei wizard avatar character
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large version */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Large (400x400)
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo width={400} height={400} />
            </div>
          </div>

          {/* Medium version */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Medium (200x200)
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo width={200} height={200} />
            </div>
          </div>

          {/* Small version */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Small (100x100)
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo width={100} height={100} />
            </div>
          </div>

          {/* Icon version */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Icon (64x64)
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo width={64} height={64} />
            </div>
          </div>

          {/* Dark background version */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              On Dark Background
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo width={150} height={150} />
            </div>
          </div>

          {/* With custom className */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              With Animation
            </h2>
            <div className="flex justify-center">
              <ViteFeiLogo 
                width={150} 
                height={150} 
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Usage</h2>
          <div className="bg-gray-50 rounded-md p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-800">
{`import ViteFeiLogo from "./components/ViteFeiLogo";

// Basic usage
<ViteFeiLogo />

// With custom size
<ViteFeiLogo width={200} height={200} />

// With custom styling
<ViteFeiLogo 
  width={150} 
  height={150} 
  className="hover:scale-110 transition-transform"
/>`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">width</td>
                  <td className="border border-gray-300 px-4 py-2">number</td>
                  <td className="border border-gray-300 px-4 py-2">800</td>
                  <td className="border border-gray-300 px-4 py-2">Width of the logo in pixels</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">height</td>
                  <td className="border border-gray-300 px-4 py-2">number</td>
                  <td className="border border-gray-300 px-4 py-2">800</td>
                  <td className="border border-gray-300 px-4 py-2">Height of the logo in pixels</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">""</td>
                  <td className="border border-gray-300 px-4 py-2">Additional CSS classes for styling</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">
            The ViteFeiLogo component combines the Vite logo (hotel/building icon on a blue circular background) 
            with the Fei wizard avatar character. The wizard wears a magical hat decorated with moons and stars, 
            and has a retro TV monitor for a body with four arms and legs. This unique combination creates a 
            memorable brand identity for the hotel booking application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViteFeiLogoDemo;
