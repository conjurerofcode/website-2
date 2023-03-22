import { motion } from "framer-motion";
import MotionPath from "../MotionPath";
import { Link } from "react-router-dom";
import HeaderLink from "./Link";

const Header = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateY: 10 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-[10vh] min-h-[100px] p-1  flex flex-row "
    >
      <MotionPath
        stroke={70}
        d={"M 0,30 L 225,30 Q 250,30 250,0"}
        duration={0.65}
        style={
          "absolute  top-0 left-0   w-min-half-400 h-[10vh] min-h-[100px] stroke-accent-blue -z-10"
        }
      />

      <motion.div
        className=" w-min-full-400 flex flex-row  items-start justify-start pl-[1vw]"
        variants={item}
      >
        <h1 className="text-clamp-lg text-white z-20">Michael Moore</h1>
      </motion.div>

      <motion.div
        className=" flex flex-row w-2/3   justify-end sm:justify-start"
        variants={item}
      >
        <div className="m-2 mx-5 relative">
          <HeaderLink to={"/"} title={"Home"} />
        </div>
        <div className="m-2 mx-5 relative">
          <HeaderLink to={"/portfolio"} title={"Portfolio"} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
