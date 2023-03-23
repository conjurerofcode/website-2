import { Link, useLocation } from "react-router-dom";
import MotionPath from "../MotionPath";
import { motion } from "framer-motion";

const HeaderLink = ({ to, title }: { to: string; title: string }) => {
  const location = useLocation();
  let isPath = location.pathname == to;
  return (
    <motion.div
      className={`duration-300  text-clamp-md w-min-half-200  `}
    >
      {isPath && (
        <MotionPath
          stroke={5}
          d={"M 0,35 L 250,35"}
          style={`absolute  w-full h-[5vh] min-h-[30px]  stroke-sunny -z-10  `}
        />
      )}
      <Link to={to}>{title}</Link>
    </motion.div>
  );
};

export default HeaderLink;
