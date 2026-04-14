import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import type { SearchContext as SearchContextType } from "../contexts/SearchContext";

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    return {
      destination: "",
      checkIn: new Date(),
      checkOut: new Date(),
      adultCount: 1,
      childCount: 0,
      hotelId: "",
      saveSearchValues: () => {},
      clearSearchValues: () => {},
    } as SearchContextType;
  }
  return context;
};

export default useSearchContext;
