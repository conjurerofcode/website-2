import { motion } from "framer-motion";

const MotionPath = ({
  style,
  d,
  stroke,
  view,
  delay,
  duration,
}: {
  style: string;
  d: string;
  stroke: number;
  view?: string;
  delay: number;
  duration: number;
}) => {
  return (
    <div className={`${style}`}>
      <motion.svg className="h-full w-full " viewBox={view}>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: duration,
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
MotionPath.defaultProps = { delay: 0, duration: 0.5 };
export default MotionPath;
