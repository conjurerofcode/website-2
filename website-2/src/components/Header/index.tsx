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
      className="w-full h-[10vh] min-h-[100px] sm:p-1  flex flex-col sm:flex-row "
    >
      <MotionPath
        stroke={70}
        d={"M 0,30 L 225,30 Q 250,30 250,0"}
        duration={0.65}
        style={
          "absolute  top-0 left-0   w-min-full-400 h-[10vh] min-h-[100px] stroke-seafoam -z-10"
        }
      />

      <motion.div
        className="w-min-full-400 flex flex-row items-center justify-start sm:items-start sm:justify-start sm:pl-[1vw]"
        variants={item}
      >
        <h1 className="text-clamp-lg text-white z-20 ">Michael Moore</h1>
      </motion.div>

      <motion.div
        className="fixed border-t-2 border-navy z-20 sm:border-t-0 bottom-0 sm:relative bg-bone sm:bg-transparent flex flex-row w-full justify-center"
        variants={item}
      >
        <div className="m-2 mx-5 relative">
          <HeaderLink to={"/"} title={"Home"} />
        </div>
        <div className="m-2 mx-5 relative">
          <HeaderLink to={"/portfolio"} title={"Portfolio"} />
        </div>
        <div className="m-2 mx-5 relative">
          <motion.div className={`duration-300  text-clamp-md w-min-half-200 `}>
            <a className="mt-5" href="mailto: miromoore@protonmail.com">
              Contact
            </a>
          </motion.div>
        </div>
        <div className="m-2 h-1/2  absolute right-5 px-3 py-1 border-2 border-black rounded-lg hidden sm:visible sm:block">
          <motion.div className={`duration-300  text-clamp-md w-min-half-200 `}>
            <a className="mt-5 h-full w-full" href="/">
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
