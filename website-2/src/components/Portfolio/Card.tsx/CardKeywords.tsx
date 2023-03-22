import { useCardContext } from "./CardContext";

const CardKeywords = () => {
  const { card } = useCardContext();
  return <div>{card.keywords}</div>;
};

export default CardKeywords;
