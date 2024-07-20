import { button as buttonStyles } from "@nextui-org/theme";
import { title } from "@/components/primitives";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Search&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Bible Verse&nbsp;</h1>
        <br />
        <h1 className={title()}>through meaning, not just words.</h1>
        {/*<h2 className={subtitle({ class: "mt-4" })}>*/}
        {/*  Beautiful, fast and modern React UI library.*/}
        {/*</h2>*/}
      </div>

      <div className="flex gap-3">
        <NextLink
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/search"}
        >
          Get Started
        </NextLink>
      </div>

      {/*<div className="mt-8">*/}
      {/*  <Snippet hideCopyButton hideSymbol variant="bordered">*/}
      {/*    <span>*/}
      {/*      Get started by editing <Code color="primary">app/page.tsx</Code>*/}
      {/*    </span>*/}
      {/*  </Snippet>*/}
      {/*</div>*/}
    </section>
  );
}
