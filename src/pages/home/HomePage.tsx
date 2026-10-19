import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex min-h-55 flex-col justify-between gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
      >
        <div className="flex flex-col gap-2">
          <div className="wrap-break-word text-center text-lg font-bold">
            {p.name}
          </div>
          <div className="text-sm text-gray-500">{p.description}</div>
          <div className="text-sm text-gray-500">
            {p.maintainers?.length || 0} maintainers
          </div>
        </div>
        <Link
          to={`/packages/${p.name}`}
          className="w-full rounded border border-gray-900 bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-gray-700"
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container mx-auto space-y-8 py-8 sm:py-12">
      <div className="space-y-4 sm:space-y-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          The NPM Registry
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-gray-500 sm:text-base">
          The package manager for JavaScript. Search, explore, and learn about
          packages in the npm ecosystem.
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
