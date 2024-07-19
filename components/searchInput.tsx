import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export const SearchInput = ({
  value,
  onClick,
}: {
  value?: string;
  onClick: (query: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(value || "");

  const toSearch = () => {
    onClick(searchQuery);
  };

  return (
    <div className="flex flex-nowrap w-full min-w-sm gap-x-1">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        // endContent={
        //   <Kbd className="hidden lg:inline-block" keys={["command"]}>
        //
        //   </Kbd>
        // }
        labelPlacement="outside"
        placeholder="Search a verse"
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
