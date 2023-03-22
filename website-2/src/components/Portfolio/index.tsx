import { motion } from "framer-motion";
import MotionPath from "../MotionPath";
import Card from "./Card.tsx";
import { CardItems } from "../../const";
import CardImage from "./Card.tsx/CardImage";
import CardInfo from "./Card.tsx/CardInfo";
import CardTitle from "./Card.tsx/CardTitle";
import CardDescription from "./Card.tsx/CardDescription";
import CardLink from "./Card.tsx/CardLink";
import CardKeywords from "./Card.tsx/CardKeywords";

const Portfolio = () => {
  const exCard = CardItems[0];
  // const cards = [1, 2, 3, 4];
  // const rows = Math.ceil(cards.length / 2);
  return (
    <motion.div className="w-full h-full min-w-screen min-h-[80vh] flex items-center ">
      <Card
        card={exCard}
        image={<CardImage />}
        info={
          <CardInfo>
            <CardTitle />
            <CardDescription />
            <CardKeywords />
            <CardLink />
          </CardInfo>
        }
      />
    </motion.div>
  );
};

export default Portfolio;

//
{
  /* <motion.div
        className={`h-full min-h-[75vh] w-full grid grid-cols-2 grid-rows-${rows} place-items-center  bg-slate-500 gap-5`}
      >
        <Card></Card>
        {cards.map((card, idx) => {
          return <Card  />;
        })}
      </motion.div> */
}
