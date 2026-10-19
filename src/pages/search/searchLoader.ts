import type { PackageSummary } from "../../api/types/packageSummary";
import { searchPackages } from "../../api/queries/searchPackages";

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}
export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  console.log(request);
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("A search term should br provided.");
  }

  const result = await searchPackages(term);
  return {
    searchResults: result,
  };
}
