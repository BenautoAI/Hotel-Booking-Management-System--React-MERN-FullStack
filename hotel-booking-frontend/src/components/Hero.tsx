import { useState } from "react";
import PropertyTypeTabs from "./PropertyTypeTabs";
import SearchForm from "./SearchForm";

const Hero = ({ onSearch }: { onSearch: (searchData: any) => void }) => {
  const [propertyType, setPropertyType] = useState<"commercial" | "residential">(
    "commercial"
  );

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="max-w-8xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
              Let's Find Your Ideal Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Discover the perfect property that matches your needs
            </p>
          </div>

          {/* Property Type Tabs */}
          <div className="mb-8">
            <PropertyTypeTabs
              activeTab={propertyType}
              onTabChange={setPropertyType}
            />
          </div>

          {/* Search Form Component */}
          <div>
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
