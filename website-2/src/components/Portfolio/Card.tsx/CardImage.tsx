import { LazyMotion } from "framer-motion";
import { useCardContext } from "./CardContext";
import BlurImage from "../../LazyImage.tsx";

const CardImage = () => {
  const { card } = useCardContext();
  return (
    <div>
      <BlurImage src={card.image.src} base64={card.image.base64} />{" "}
    </div>
  );
};

export default CardImage;
