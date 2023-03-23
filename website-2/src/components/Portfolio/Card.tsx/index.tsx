import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import CardContext from "./CardContext";
import { CardType } from "../../../types";

type Props = {
  card: CardType;
  image: ReactNode;
  info: ReactNode;
  title: ReactNode;
  index?: number;
};

const Card = ({ image, info, card, title, index }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const container = {
    rest: { },
    hover: {  
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    rest: { opacity: 0, scaleY: 0, translateY: -10 },
    hover: { opacity: 1, scaleY: 1, translateY: 0 },
  };
  const text = { 
   
  }
  return (
    <CardContext.Provider value={{ card }}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={container}
        onMouseEnter={() => setIsHovered((prev: boolean) => true)}
        onMouseLeave={() => setIsHovered((prev: boolean) => false)}
        className="w-full h-[30vh]  min-h-[200px]  flex flex-row justify-evenly"
      >
        <motion.div className="flex flex-col sm:flex-1 relative items-center   ">

        <motion.h1  className="w-1/3  min-w-[200px] text-clamp-md text-end sm:mr-10  ">
          {title}
        </motion.h1>
          <motion.div className="absolute sm:right-10 top-0 h-full w-[2px] bg-sunny" ></motion.div>
        <div className="h-[40vh] w-[40vh] min-w-[200px] min-h-[200px] bg-white rounded-lg">{image}</div>

        </motion.div>
        

        <motion.div className="relative sm:flex-1  h-full  flex  items-center justify-center text-left">
          <div className="h-2/3 w-2/3 flex items-start justify-center " >
          {info}
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
