import { LazyMotion } from "framer-motion";
import { useCardContext } from "./CardContext";
import BlurImage from "../../LazyImage.tsx";

const CardImage = () => {
  const { card } = useCardContext();
  return (
    <div className="w-full h-full bg-white rounded-lg">
      {/* <BlurImage src={card.image.src} base64={card.image.base64} fit={"fill"} /> */}
    </div>
  );
};

export default CardImage;
