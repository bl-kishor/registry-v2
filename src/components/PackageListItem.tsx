import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
  pack: PackageSummary;
}

function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = [...new Set(pack.keywords || [])].map((keyword) => {
    return (
      <div
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
        key={keyword}
      >
        {keyword}
      </div>
    );
  });

  return (
    <div className="border p-4 rounded flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${pack.name}`} className="font-bold text-xl">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex flex-wrap gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          className="rounded px-2 py-3 bg-black text-white cursor-pointer text-lg"
          to={`/packages/${pack.name}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default PackageListItem;
