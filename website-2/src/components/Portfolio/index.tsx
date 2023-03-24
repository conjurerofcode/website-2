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
import { CardType } from "../../types";

const Portfolio = () => {
  const rows = Math.ceil(cards.length / 2);
  return (
    <motion.div
      className={`w-full h-full min-w-screen  min-h-[85vh] grid grid-cols-1 sm:grid-cols-2 grid-rows-auto place-items-center `}
    >
      {cards}
    </motion.div>
  );
};
const cards = CardItems.map((card: CardType, index: number) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { translateY: "-100px", scaleY: 0 },
        visible: {
          translateY: 0,
          scaleY: 1,
        },
      }}
      className="h-[40vh] min-h-[400px] items-center"
    >
      <Card
        card={card}
        index={index}
        image={<CardImage />}
        title={<CardTitle />}
        keywords={<CardKeywords />}
        info={
          <CardInfo>
            <CardDescription />

            <CardLink />
          </CardInfo>
        }
      />
    </motion.div>
  );
});

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
