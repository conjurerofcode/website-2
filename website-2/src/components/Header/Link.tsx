import { Link, useLocation } from "react-router-dom";
import MotionPath from "../MotionPath";
import { motion } from "framer-motion";

const HeaderLink = ({ to, title }: { to: string; title: string }) => {
  const location = useLocation();
  let isPath = location.pathname == to;
  return (
    <motion.div
      className={`duration-300 ${
        isPath ? "text-white" : "text-black"
      } text-clamp-md w-min-half-200  `}
    >
      {isPath && (
        <MotionPath
          stroke={40}
          d={"M 0,25 L 250,25"}
          style={`absolute  w-full h-[3vh]  stroke-accent-blue -z-10  `}
        />
      )}
      <Link to={to}>{title}</Link>
    </motion.div>
  );
};

export default HeaderLink;
