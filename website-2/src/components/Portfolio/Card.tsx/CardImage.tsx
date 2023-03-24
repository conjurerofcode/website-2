import { LazyMotion } from "framer-motion";
import wave from "../../../assets/CardImages/wave.jpg";
import { useCardContext } from "./CardContext";
import BlurImage from "../../LazyImage.tsx";

const CardImage = () => {
  const { card } = useCardContext();
  return (
    <div className="w-full h-full bg-white rounded-lg">
      <BlurImage src={wave} base64={card.image.base64} fit={"contain"} />
    </div>
  );
};

export default CardImage;
