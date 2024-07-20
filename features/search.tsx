import { IVerseResult } from "@/models/IVerseResult";
import { useState } from "react";
import { title } from "@/components/primitives";
import Loading from "@/components/loading";
import { SearchInputList } from "@/components/searchInputList";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number,
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        fn(...args)
          .then(resolve)
          .catch(reject);
      }, delay);
    });
  };
}

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
  const [startSearching, setStartSearching] = useState<boolean>(false);
  const search = async () => {
    if (!query) return;
    setStartSearching(true);
    setResults([]);
    const results = await getData(query);
    setResults(results);
  };

  const debouncedSearch = debounceAsync(search, 500);

  return (
    <>
      <div>
        <h1 className={title()}>Search</h1>
      </div>
      <div className="my-2">
        <p>Search Bible verses in meaning not in words.</p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <div className="flex flex-nowrap w-full min-w-sm gap-x-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search a verse"
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                debouncedSearch();
              }
            }}
          />
          <Button className="text-sm" color="primary" onClick={debouncedSearch}>
            Search
          </Button>
        </div>
      </div>

      <div className="gap-y-2 flex flex-col mt-4">
        {startSearching && results?.length === 0 ? (
          <Loading />
        ) : (
          <SearchInputList verseResults={results} query={query} />
        )}
      </div>
    </>
  );
}
