import { IVerseResult } from "@/models/IVerseResult";
import { useState } from "react";
import { title } from "@/components/primitives";
import { SearchInput } from "@/components/searchInput";
import Loading from "@/components/loading";
import { SearchInputList } from "@/components/searchInputList";
import { debounce } from "next/dist/server/utils";

const getData = async (query: string): Promise<IVerseResult[]> => {
  if (!query) return [];

  const res = await fetch(`/api/search/?verse_query=${query}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function Search() {
  const [results, setResults] = useState<IVerseResult[]>([]);
  const [query, setQuery] = useState<string>("");
  const search = async () => {
    if (!query) return;
    setResults([]);
    const results = await getData(query);
    setResults(results);
  };

  const debouncedSearch = debounce(search, 500);

  return (
    <>
      <div>
        <h1 className={title()}>Search</h1>
      </div>
      <div className="my-2">
        <p>Search Bible verses in meaning not in words.</p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <SearchInput
          value={query}
          onSearch={debouncedSearch}
          onChange={setQuery}
        />
      </div>

      <div className="gap-y-2 flex flex-col mt-4">
        {query && results?.length === 0 ? (
          <Loading />
        ) : (
          <SearchInputList verseResults={results} query={query} />
        )}
      </div>
    </>
  );
}
