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
    hidden: { opacity: 0, translateX: -10 },
    show: {
      opacity: 1,
      translateX: 0,
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
      className="w-full h-[10vh] sm:p-5 p-1  flex flex-row"
    >
      <MotionPath
        view={"120 30 100 50"}
        stroke={40}
        d={"M 50,50 L 120,50 Q 150,50 150,20"}
        style={
          "absolute  top-0 -left-5 sm:left-0   w-min-full-600 h-[10vh] stroke-[#086375] -z-10"
        }
      />

      <motion.div className=" w-min-full-400 flex flex-row " variants={item}>
        <h1 className="text-clamp-lg text-white z-20">Michael Moore</h1>
      </motion.div>

      <motion.div
        className=" flex flex-row w-2/3   justify-end sm:justify-start"
        variants={item}
      >
        <div className="m-2 relative">
          <HeaderLink to={"/"} title={"Home"} />
        </div>
        <div className="m-2 relative">
          <HeaderLink to={"/portfolio"} title={"Portfolio"} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
