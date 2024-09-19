import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";

import { IVerseResult } from "@/models/IVerseResult";

export const VerseResult = ({ verse }: { verse: IVerseResult }) => {
  const {
    Index,
    book_name,
    book_number,
    chapter_number,
    translation_name,
    verse_number,
    verse_text,
  } = verse;

  return (
    <Card className="max-w-md">
      <CardBody>
        <p>{verse_text}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Chip color="default">
          {book_name} {chapter_number}:{verse_number}
        </Chip>
      </CardFooter>
    </Card>
  );
};
