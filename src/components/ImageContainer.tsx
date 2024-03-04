import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  path: string;
  alt: string;
  height?: number;
  width?: number;
  fill?: boolean;
  objectCover?: string;
  className?: string;
  childClassName?: string;
}

const ImageContainer = ({
  path,
  alt,
  height,
  width,
  fill,
  objectCover,
  className,
  childClassName,
}: ImageContainerProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={path}
        alt={alt}
        height={height}
        width={width}
        fill={fill}
        objectFit={objectCover}
        className={childClassName}
      />
    </div>
  );
};

export default ImageContainer;
