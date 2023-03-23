import { createContext, useContext } from "react";
import { CardType } from "../../../types";

const CardContext = createContext<{ card: CardType } | null>(null);

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Card.* component must be a child of Card component");
  }

  return context;
}

export default CardContext;
