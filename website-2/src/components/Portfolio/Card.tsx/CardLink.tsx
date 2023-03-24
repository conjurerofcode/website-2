import { useCardContext } from "./CardContext";

const CardLink = () => {
  const { card } = useCardContext();
  return (
    <a
      href={card.link}
      target="_blank"
      className="absolute top-0 left-0 h-full w-full opacity-0"
    ></a>
  );
};

export default CardLink;
