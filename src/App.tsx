import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Skeleton from "./components/Skeleton";
import HomePage from "./pages/HomePage";
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
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
