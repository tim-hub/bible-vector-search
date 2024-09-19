import { Progress } from "@nextui-org/progress";

const Loading: React.FC = () => {
  return (
    <Progress
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
      size="md"
    />
  );
};

export default Loading;
