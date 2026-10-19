import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: searchResults.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });

  const renderedPackages = virtualizer.getVirtualItems().map((item) => {
    const result = searchResults[item.index];
    return (
      <div
        key={result.name}
        data-index={item.index}
        ref={virtualizer.measureElement}
        className="absolute top-0 left-0 w-full pb-2"
        style={{ transform: `translateY(${item.start}px)` }}
      >
        <PackageListItem pack={result} />
      </div>
    );
  });

  return (
    <div className="grid h-[calc(100dvh-3.5rem)] min-h-0 grid-rows-[auto_1fr]">
      <h1 className="font-bold shrink-0 text-2xl my-6">Search Results</h1>
      <div className="min-h-0 overflow-y-auto" ref={parentRef}>
        <div
          className="relative"
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {renderedPackages}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
