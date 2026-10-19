import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  const renderMaintainers = (details.maintainers || []).map((item) => {
    return <div key={item.email}>{item.name}</div>;
  });

  const renderedKeywords = [...new Set(details.keywords || [])].map(
    (keyword) => {
      return <div key={keyword}>{keyword}</div>;
    },
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{details.name}</h1>

      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="bg-gray-200 rounded p-3">{details.description}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="bg-gray-200 rounded p-3">{details.license}</div>
      </div>
      {details.author && (
        <div>
          <h3 className="text-lg font-bold">Author</h3>
          <div className="bg-gray-200 rounded p-3">{details.author.name}</div>
        </div>
      )}
      {renderMaintainers.length > 0 && (
        <div>
          <h3 className="font-bold text-lg">Maintainers</h3>
          <div className="rounded bg-gray-200 p-3 flex flex-wrap gap-3">
            {renderMaintainers}
          </div>
        </div>
      )}

      {renderedKeywords.length > 0 && (
        <div>
          <h3 className="font-bold text-lg">Keywords</h3>
          <div className="bg-gray-200 p-3 rounded flex flex-wrap gap-3">
            {renderedKeywords}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
