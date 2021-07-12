import CardInterface from "./CardInterface";

export default interface CardPropsInterface {
  flipCard: (index: number) => void;
  setCurrentCards: React.Dispatch<React.SetStateAction<CardInterface[]>>;
  index: number;
  isPaused: boolean;
  cards: CardInterface[];
}
