import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import CardContext from "./CardContext";
import { CardType } from "../../../types";

type Props = {
  card: CardType;
  image: ReactNode;
  info: ReactNode;
  title: ReactNode;
};

const Card = ({ image, info, card, title }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const container = {
    rest: {},
    hover: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    rest: { opacity: 0, scaleX: 0 },
    hover: { opacity: 1, scaleX: 1 },
  };
  return (
    <CardContext.Provider value={{ card }}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={container}
        onMouseEnter={() => setIsHovered((prev: boolean) => true)}
        onMouseLeave={() => setIsHovered((prev: boolean) => false)}
        className="relative w-min-full-400 h-min-half-400 border-black border-2 rounded-lg flex flex-col item-center justify-center "
      >
        <h1 className="text-clamp-md bg-accent-blue text-white pl-3">
          {title}
        </h1>
        {image}
        {isHovered && <motion.div variants={item}>{info}</motion.div>}
      </motion.div>
    </CardContext.Provider>
  );
};

export default Card;

{
  /* <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={container}
        className=" w-min-full-400 h-2/3 min-h-[200px] px-5 overflow-hidden rounded-lg bg-white row-span-1 col-span-2 sm:col-span-1"
      >
        {image}
        <motion.div className="bg-slate-200 w-1/2 h-1/2" variants={item}>
          {info}
        </motion.div>
        <h1 className={"text-clamp-lg"}>Title</h1>
      </motion.div> */
}
