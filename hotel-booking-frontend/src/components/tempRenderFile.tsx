/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Hero from "./Hero";

/**
 * Render file to preview the Hero component
 * Demonstrates the hero section with search functionality
 */
const HeroRender = () => {
  const handleSearch = (searchData: any) => {
    console.log("Search initiated with data:", searchData);
  };

  return <Hero onSearch={handleSearch} />;
};

export default HeroRender;
