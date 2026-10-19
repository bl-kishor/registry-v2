import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Skeleton from "./components/Skeleton";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
        hydrateFallbackElement: (
          <div
            className="space-y-8 py-8 sm:py-12"
            role="status"
            aria-label="Loading featured packages"
          >
            <div className="space-y-4 text-center">
              <Skeleton times={1} className="mx-auto h-12 max-w-96" />
              <Skeleton times={1} className="mx-auto h-5 max-w-2xl" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Skeleton times={4} className="h-55" />
            </div>
          </div>
        ),
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
        hydrateFallbackElement: (
          <div
            className="py-6"
            role="status"
            aria-label="Loading search results"
          >
            <Skeleton times={5} className="h-24" />
          </div>
        ),
      },
      {
        path: "/packages/:name/*",
        element: <DetailsPage />,
        loader: detailsLoader,
        hydrateFallbackElement: (
          <div
            className="space-y-4 py-6"
            role="status"
            aria-label="Loading package details"
          >
            <Skeleton times={1} className="h-9 w-1/2" />
            <Skeleton times={1} className="h-20" />
            <Skeleton times={1} className="h-16" />
            <Skeleton times={1} className="h-16" />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
