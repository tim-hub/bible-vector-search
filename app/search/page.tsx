"use client";

import { Suspense } from "react";

import Search from "@/features/search";
import Loading from "@/components/loading";

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Search />
    </Suspense>
  );
}
