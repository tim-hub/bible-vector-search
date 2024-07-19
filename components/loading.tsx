import { Progress } from "@nextui-org/progress";

const Loading: React.FC = () => {
  return (
    <Progress
      size="md"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
  );
};

export default Loading;
