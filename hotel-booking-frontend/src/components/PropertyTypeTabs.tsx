import React from "react";

export interface PropertyTypeTabsProps {
  activeTab: "commercial" | "residential";
  onTabChange: (tab: "commercial" | "residential") => void;
}

const PropertyTypeTabs: React.FC<PropertyTypeTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
  ] as const;

  return (
    <div className="flex gap-8 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-4 text-sm font-semibold transition-all duration-200 relative ${
            activeTab === tab.id
              ? "text-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-t-sm" />
          )}
        </button>
      ))}
    </div>
  );
};

export default PropertyTypeTabs;
