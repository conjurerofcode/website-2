import { motion } from "framer-motion";

const MotionPath = ({
  style,
  d,
  stroke,
  view,
  delay,
}: {
  style: string;
  d: string;
  stroke: number;
  view: string;
  delay: number;
}) => {
  return (
    <div className={`${style}`}>
      <motion.svg className="h-full w-full " viewBox={view}>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: delay,
          }}
          strokeWidth={stroke}
          strokeDasharray="0 1"
          fill="none"
          d={d}
        />
      </motion.svg>
    </div>
  );
};
MotionPath.defaultProps = { delay: 0 };
export default MotionPath;
