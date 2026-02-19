import Hero from "./components/Hero";

const RenderTemp = () => {
  const handleSearch = (searchData: any) => {
    console.log("Search initiated with:", searchData);
  };

  return (
    <div>
      <Hero onSearch={handleSearch} />
    </div>
  );
};

export default RenderTemp;
