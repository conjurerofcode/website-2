import { useCardContext } from "./CardContext";

const CardLink = () => {
  const { card } = useCardContext();
  return (
    <a href={card.link} target="_blank" className="hover:text-cheetoh duration-200">
      <br />
      View Project
    </a>
  );
};

export default CardLink;
