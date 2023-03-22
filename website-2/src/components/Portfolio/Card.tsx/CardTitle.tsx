import { useCardContext } from "./CardContext";

const CardTitle = () => {
  const { card } = useCardContext();
  return <div>{card.title}</div>;
};

export default CardTitle;
