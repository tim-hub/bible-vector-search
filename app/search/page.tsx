"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { title } from "@/components/primitives";

import { SearchInput } from "@/components/searchInput";

import { useEffect, useState } from "react";
import { IVerseResult } from "@/models/IVerseResult";
import { SearchInputList } from "@/components/searchInputList";
import Loading from "@/components/loading";

const getData = async (query: string): Promise<IVerseResult[]> => {
  const res = await fetch(`/api/search/?verse_query=${query}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function SearchPage() {
  const [results, setResults] = useState<any[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const search = async (query: string) => {
    if (!query) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${query}`);
    setResults([]);
    const results = await getData(query);
    setResults(results);
  };

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, []);

  return (
    <>
      <div>
        <h1 className={title()}>Search</h1>
      </div>
      <div className="my-2">
        <p>Search Bible verses in meaning not in words.</p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <SearchInput value={query} onClick={search} />
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
