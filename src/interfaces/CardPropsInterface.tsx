import CardInterface from "./CardInterface";

export default interface CardPropsInterface {
  flipCard: (index: number) => void;
  checkForMatch: () => void;
  currentCards: CardInterface[];
  index: number;
  isPaused: boolean;
  cards: CardInterface[];
}
