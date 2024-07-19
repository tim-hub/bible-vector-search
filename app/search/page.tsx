"use client";

import { title } from "@/components/primitives";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { SearchInput } from "@/components/searchInput";

export default function SearchPage() {
  const params = useSearchParams();
  const verseQuery = params.get("q") || "";

  const router = useRouter();
    const search = (query: string) => {
        router.push(`/search?q=${query}`);
    }

  return (
    <>
      <div>
        <h1 className={title()}>Search</h1>
      </div>
      <div className="my-2">
        <p>Search Bible verses in meaning not in words.</p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <SearchInput  onClick={search} />
      </div>
    </>
  );
}
