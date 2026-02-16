import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import { AppContextProvider } from "../contexts/AppContext";
import { SearchContextProvider } from "../contexts/SearchContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

/**
 * Render file to preview the Home page with Footer component
 * Shows the complete layout with header, home content, and footer
 */
const HomeWithFooterRender = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <SearchContextProvider>
            <Layout>
              <Home />
            </Layout>
          </SearchContextProvider>
        </AppContextProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default HomeWithFooterRender;
