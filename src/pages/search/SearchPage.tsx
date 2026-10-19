import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedPackages = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <h1 className="font-bold text-2xl my-6">Search Results</h1>
      <div className="space-y-2">{renderedPackages}</div>
    </div>
  );
}

export default SearchPage;
