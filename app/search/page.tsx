"use client";

import Search from "@/features/search";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Search />
    </Suspense>
  );
}
