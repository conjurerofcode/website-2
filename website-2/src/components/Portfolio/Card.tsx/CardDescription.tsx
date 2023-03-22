import { useCardContext } from "./CardContext";

const CardDescription = () => {
  const { card } = useCardContext();
  return <div>{card.description}</div>;
};

export default CardDescription;
