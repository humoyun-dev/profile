import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Image: React.FC<Props> = ({
  alt,
  src,
  className,
  onClick,
  height,
  width,
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
      className={twMerge(
        `duration-700 ease-in-out group-hover:opacity-75 ${
          loading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
        }}`,
        className
      )}
      onLoad={() => setLoading(false)}
    />
  );
};

export default Image;
