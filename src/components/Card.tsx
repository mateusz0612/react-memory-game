import React from "react";
import CardInterface from "../interfaces/CardInterface";
import images from "../images";

interface Props {
  cards: CardInterface[];
  currentCards: CardInterface[];
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
    const [firstCard, secondCard] = currentCards;

    const firstCardIndex = firstCard.index;
    const firstCardName = firstCard.name;
    const secondCardIndex = secondCard.index;
    const secondCardName = secondCard.name;

    if (
      firstCardName === secondCardName &&
      firstCardIndex !== secondCardIndex
    ) {
      console.log("match");
    } else console.log("no match");
  };

  const card = cards[index];
  const { name, isFaceUp } = card;

  return (
    <img
      className="card"
      onClick={() => {
        flipCard(index);
        currentCards.push(card);
        if (currentCards.length === 2) {
          console.log(currentCards);
          checkForMatch();
          currentCards.splice(0);
        }
      }}
      src={isFaceUp ? images[name] : images.defaultPhoto}
      alt={name}
    />
  );
};

export default Card;
