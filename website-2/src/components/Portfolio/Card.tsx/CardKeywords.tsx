import { m, motion } from "framer-motion";
import { useCardContext } from "./CardContext";

const CardKeywords = () => {
  const { card } = useCardContext();
  // const container = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5,
  //       staggerChildren: 0.75,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //   },
  // };

  return (
    <motion.div
      // initial="hidden"
      // whileHover="show"
      // animate="hidden"
      // variants={container}
      className="h-1/2 flex flex-row w-full justify-center items-center text-center"
    >
      {card.keywords.join(", ")}
    </motion.div>
  );
};

export default CardKeywords;
