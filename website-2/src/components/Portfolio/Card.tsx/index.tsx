import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import CardContext from "./CardContext";
import { CardType } from "../../../types";

type Props = {
  card: CardType;
  image: ReactNode;
  info: ReactNode;
  title: ReactNode;
  keywords: ReactNode;
  index: number;
};

const Card = ({ image, info, card, title, index, keywords }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 == 0;
  const container = {
    rest: { rotate: isEven ? -1 : 1 },
    hover: {
      rotate: 0,
      // boxShadow: "0px 7px 0px #1e4481",
      transition: {
        duration: 0.25,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    rest: { opacity: 0, scaleY: 0, translateY: -10 },
    hover: { opacity: 1, scaleY: 1, translateY: 0 },
  };
  const img = {
    rest: { opacity: 1 },
    hover: { opacity: 0.5 },
  };
  const description = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
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
        className="w-[25vw] rounded-lg min-w-[400px] m-5 h-[20vh] min-h-[200px]  flex flex-col  relative "
      >
        <motion.div className="flex flex-col sm:flex-1 items-center justify-center relative rounded-lg">
          <motion.h1 className="w-ful min-w-[200px] text-clamp-lg text-center   ">
            {title}
          </motion.h1>

          <motion.div
            variants={img}
            className="h-full w-full min-w-[200px] min-h-[200px]  rounded-lg"
          >
            {image}
          </motion.div>

          <motion.div
            className="absolute h-[65%] w-[95%] top-[15%] px-2 pt-2 items-center text-center backdrop-blur-lg bg-sunny/75 rounded-lg text-clamp-md"
            variants={description}
          >
            {info}
          </motion.div>
          <div className="absolute -bottom-1 rounded-b-lg w-full h-[4vh]  bg-navy   text-white  text-clamp-sm flex items-center">
            {keywords}
          </div>
        </motion.div>
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
{
  /* <motion.div className="flex flex-col sm:flex-1 relative items-center   ">
          <motion.h1 className="w-1/3  min-w-[200px] text-clamp-md text-end sm:mr-10  ">
            {title}
          </motion.h1>
          <motion.div className="absolute ml-5 right-0 top-1/4 h-2/3 w-[2px] bg-sunny"></motion.div>
          <div className="h-[40vh] w-[40vh] min-w-[200px] min-h-[200px] bg-white rounded-lg">
            {image}
          </div>
        </motion.div>

        <motion.div className="relative sm:flex-1  h-full  flex flex-col items-center justify-center text-left">
          <div className="h-2/3 w-2/3 flex items-start justify-center ">
            {info}
          </div>
          <motion.div className="w-full h-[10vh] absolute bottom-0">
            {keywords}
          </motion.div>
        </motion.div> 
        <motion.div className="absolute ml-5 right-0 top-1/4 h-2/3 w-[2px] bg-sunny"></motion.div>
        */
}
