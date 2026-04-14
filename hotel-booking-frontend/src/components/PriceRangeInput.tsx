import React from "react";
import { DollarSign } from "lucide-react";

export interface PriceRangeInputProps {
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const presetValues = [
    { label: "$500", value: "500" },
    { label: "$2500", value: "2500" },
  ];

  const handlePresetSelect = (value: string) => {
    onMinPriceChange(value);
    onMaxPriceChange("");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <DollarSign className="w-4 h-4 text-gray-600" />
        <label className="text-sm font-semibold text-gray-700">
          Price Range
        </label>
      </div>

      {/* Preset Price Buttons */}
      <div className="flex gap-2 mb-4">
        {presetValues.map((preset) => (
          <button
            key={preset.value}
            onClick={() => handlePresetSelect(preset.value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              minPrice === preset.value && maxPrice === ""
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Min/Max Price Inputs */}
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="number"
            placeholder="Min price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            min="0"
          />
        </div>
        <div className="flex items-center text-gray-400">
          <span className="px-2">—</span>
        </div>
        <div className="flex-1">
          <input
            type="number"
            placeholder="Max price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeInput;
