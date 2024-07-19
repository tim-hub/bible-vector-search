"use client";

import { title } from "@/components/primitives";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/searchInput";
import { useState } from "react";

const getData = async (query: string): Promise<any[]> => {
  const res = await fetch(`/api/search/?verse_query=${query}`);
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
    const results = await getData(query);
    setResults(results);

    router.push(`/search?q=${query}`);
  };

  return (
    <>
      <div>
        <h1 className={title()}>Search</h1>
      </div>
      <div className="my-2">
        <p>Search Bible verses in meaning not in words.</p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <SearchInput onClick={search} value={query} />
      </div>
      <div>
        {results.map((result) => (
          <div key={result.verse_number}>
            <p>{result.verse_text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
