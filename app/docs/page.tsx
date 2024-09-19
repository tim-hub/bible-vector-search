import { Code } from "@nextui-org/code";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>API Docs</h1>

      <div className={"text-left my-4"}>
        We have a very simply and straightforward API. You can use it to search
        for Bible verses.
        <br />
        See example below:
        <br />
        <br />
        <br />
        <h4>For example,</h4>
        <Code>
          https://bible-search.antioch.tech/api/search?verse_query=GodIsLove
        </Code>
      </div>
    </div>
  );
}
