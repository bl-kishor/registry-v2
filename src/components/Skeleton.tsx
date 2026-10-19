import classNames from "classnames";

interface SkeletonProps {
  times: number;
  className: string;
}

function Skeleton({ times, className }: SkeletonProps) {
  const outerClassName = classNames(
    "relative",
    "mb-2.5",
    "bg-gray-200",
    "overflow-hidden",
    "rounded",
    className,
  );
  const innerClassName = classNames(
    "animate-pulse",
    "absolute",
    "inset-0",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200",
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassName}>
          <div className={innerClassName}></div>
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
