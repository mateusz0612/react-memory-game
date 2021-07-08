import CardInterface from "./CardInterface";

export default interface CardPropsInterface {
  flipCard: (index: number) => void;
  handleMatch: (firstIndex: number, secondIndex: number) => void;
  handleNoMatch: (firstIndex: number, secondIndex: number) => void;
  checkForMatch: () => void;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  currentCards: CardInterface[];
  index: number;
  isPaused: boolean;
  cards: CardInterface[];
}
