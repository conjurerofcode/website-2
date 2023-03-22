import { motion } from "framer-motion";
import MotionPath from "../../MotionPath";
import { ReactNode } from "react";
import CardContext from "./CardContext";
import { CardType } from "../../../types";
import CardImage from "./CardImage";

type Props = {
  card: CardType;
  image: ReactNode;
  info: ReactNode;
};

const Card = ({ image, info, card }: Props) => {
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
    rest: { scale: 1 },
    hover: { scale: 2 },
  };
  return (
    <CardContext.Provider value={{ card }}>
      <div>
        {image}
        {info}
      </div>
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
