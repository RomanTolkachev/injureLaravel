import { FunctionComponent, ImgHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";

interface ImgCustom extends ImgHTMLAttributes<HTMLImageElement> {
  duration?: number;
  className?: string;
  // startTranslate: number;
  // endTranslate: number;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ImgCustom: FunctionComponent<ImgCustom> = ({
  src,
  duration = 0.5,
  className = "",
  alt = "img",
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: duration }}
      src={src}
      onLoad={() => setIsLoaded(true)}
      alt={alt}
      className={className}
    />
  );
};
