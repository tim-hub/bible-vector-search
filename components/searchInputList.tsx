import { Suspense } from "react";

import { IVerseResult } from "@/models/IVerseResult";
import Loading from "@/components/loading";
import { VerseResult } from "@/components/verseResult";

export const SearchInputList = ({
  verseResults,
  query,
}: {
  verseResults: IVerseResult[];
  query: string;
}) => {
  return (
    <Suspense fallback={<Loading />}>
      {query &&
        verseResults?.map((result) => (
          <VerseResult key={result.Index} verse={result} />
        ))}
    </Suspense>
  );
};
