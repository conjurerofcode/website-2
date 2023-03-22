import { motion } from "framer-motion";
import MotionPath from "../MotionPath";
import Card from "./Card.tsx";

const Portfolio = () => {
  const cards = [1, 2, 3, 4];
  return (
    <motion.div className="w-full h-full min-w-screen min-h-[80vh] grid grid-cols-2 grid-rows-4 place-items-center bg-gradient-radial">
      {cards.map((card, idx) => {
        return <Card delay={idx * 0.1} />;
      })}
    </motion.div>
  );
};

export default Portfolio;

//
