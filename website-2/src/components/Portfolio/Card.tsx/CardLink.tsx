import { useCardContext } from "./CardContext";

const CardLink = () => {
  const { card } = useCardContext();
  return (
    <a href={card.link} target="_blank">
      View Project
    </a>
  );
};

export default CardLink;
