import React from "react";
import CardInterface from "../interfaces/CardInterface";
import images from "../images";

interface Props {
  cards: CardInterface[];
  currentCards: string[];
  setCards: React.Dispatch<React.SetStateAction<CardInterface[]>>;
  index: number;
}

const Card: React.FC<Props> = ({ index, cards, setCards, currentCards }) => {
  const flipCard = (cardIndex: number) => {
    const newCards = cards.map((card, index) =>
      cardIndex === index ? { ...card, isFaceUp: true } : card
    );
    setCards(newCards);
  };

  const checkForMatch = () => {
    const [firstCardValue, secondCardValue] = currentCards;
    if (firstCardValue === secondCardValue) console.log("match");
    else console.log("no match");
  };

  const { name, isFaceUp } = cards[index];

  return (
    <img
      className="card"
      onClick={() => {
        flipCard(index);
        currentCards.push(name);
        if (currentCards.length === 2) {
          checkForMatch();
          currentCards.splice(0);
        }
        console.log(currentCards);
        checkForMatch();
      }}
      src={isFaceUp ? images[name] : images.defaultPhoto}
      alt=""
    />
  );
};

export default Card;
