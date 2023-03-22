import { motion } from "framer-motion";
import MotionPath from "../../MotionPath";

const Card = ({ delay }: { delay: number }) => {
  return (
    <motion.div className="relative w-min-full-600 h-min-full-200 m-0 pl-5 overflow-hidden">
      {/* <MotionPath
        view={"255 90 200 200"}
        stroke={20}
        d={
          "M 50 50 C -30 70, 70 90, 50 110 C 30 130, 70 150, 50 170 C 30 190, 70 210, 50 230 C 30 250, 70 270, 50 290 C 30 310, 70 330, 50 350"
        }
        style={"absolute left-0 top-0  w-full h-[15vh] stroke-[#086375] "}
        delay={delay}
      /> */}
      <h1 className={"text-clamp-lg"}>Title</h1>
    </motion.div>
  );
};

export default Card;
