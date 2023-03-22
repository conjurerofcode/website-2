import { useEffect, useState } from "react";

const preloadImageWithPromise = (src: string) => {
  return new Promise<void>((res, rej) => {
    const img = new Image();

    img.onload = () => {
      res();
    };
    img.src = src;
  });
};

function BlurImage({
  src,
  base64,

  fit,
}: {
  src: string;
  base64: string;
  fit: "fill" | "contain" | "cover" | "none" | "scale-down";
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImage = async () => {
    await preloadImageWithPromise(src);
    setIsLoaded((prev) => true);
  };
  useEffect(() => {
    loadImage();
  }, []);
  const currentSrc = isLoaded ? src : base64;
  return (
    <div className={` h-full w-full overflow-hidden bg-white`}>
      <img
        className="h-full w-full     transform"
        loading="lazy"
        alt={`none`}
        src={currentSrc}
        style={{
          objectFit: !isLoaded ? "cover" : fit,
          transition: "filter 0.3s ease-out",
          filter: !isLoaded ? "blur(5px)" : "none",
        }}
      ></img>
    </div>
  );
}
BlurImage.defaultProps = { fit: "contain" };
export default BlurImage;

// Source Leigh Halliday https://www.youtube.com/watch?v=CwpuYAQM0CY
