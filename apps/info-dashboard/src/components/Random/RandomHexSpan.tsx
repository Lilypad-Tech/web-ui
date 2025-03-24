import { useEffect, useState } from "react";

interface MetricsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  length: number;
}

const RandomHexSpan: React.FC<MetricsCardProps> = ({ length }) => {
  const [text, setText] = useState([...new Array(length - 1), "_"].join("."));

  useEffect(() => {
    const interval = setInterval(
      () => setText((t) => [...t.split("").slice(1), t.split("")[0]].join("")),
      100
    );
    return () => clearInterval(interval);
  }, []);
  return <span>{text}</span>;
};

export default RandomHexSpan;
