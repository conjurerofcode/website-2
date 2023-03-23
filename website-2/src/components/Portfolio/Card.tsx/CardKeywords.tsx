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
      className="absolute -bottom-5 left-0 flex flex-row "
    >
      {card.keywords.map((keyword: string, idx: number) => {
        return <motion.div key={idx}>{keyword}</motion.div>;
      })}
    </motion.div>
  );
};

export default CardKeywords;
