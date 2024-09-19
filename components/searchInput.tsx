import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";

import { SearchIcon } from "@/components/icons";

export const SearchInput = ({
  value,
  onSearch,
  onChange,
}: {
  value: string;
  onChange: (query: string) => void;
  onSearch: () => Promise<void>;
}) => {
  const [query, setQuery] = useState<string>(value);

  const toSearch = async () => {
    onChange(query);
    await onSearch();
  };

  return (
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
            toSearch();
          }
        }}
      />
      <Button className="text-sm" color="primary" onClick={toSearch}>
        Search
      </Button>
    </div>
  );
};
