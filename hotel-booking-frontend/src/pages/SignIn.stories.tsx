import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from '../contexts/AppContext';
import { SearchContextProvider } from '../contexts/SearchContext';
import SignIn from './SignIn';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const meta: Meta<typeof SignIn> = {
  title: 'Pages/SignIn',
  component: SignIn,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <SearchContextProvider>
              <Story />
            </SearchContextProvider>
          </AppContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {
  args: {},
};
