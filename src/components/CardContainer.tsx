import React, { useState } from "react";
import "./CardContainerStyles.css";
import Card from "./Card";
import CardInterface from "../interfaces/CardInterface";
import nextId from "react-id-generator";

const currentCards: CardInterface[] = [];
const gameCards: CardInterface[] = [
  {
    name: "react",
    isGuessed: false,
    isFaceUp: false,
    index: 0,
  },
  {
    name: "angular",
    isGuessed: false,
    isFaceUp: false,
    index: 1,
  },
  {
    name: "react",
    isGuessed: false,
    isFaceUp: false,
    index: 2,
  },
  {
    name: "angular",
    isGuessed: false,
    isFaceUp: false,
    index: 3,
  },
  {
    name: "vuejs",
    isGuessed: false,
    isFaceUp: false,
    index: 4,
  },
  {
    name: "vuejs",
    isGuessed: false,
    isFaceUp: false,
    index: 5,
  },
  {
    name: "javascript",
    isGuessed: false,
    isFaceUp: false,
    index: 6,
  },
  {
    name: "javascript",
    isGuessed: false,
    isFaceUp: false,
    index: 7,
  },
].sort(() => Math.random() - 0.5); //shuffle elements in array

const CardContainer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>(gameCards);

  const flipCard = (cardIndex: number) => {
    const newCards = cards.map((card, index) =>
      cardIndex === index ? { ...card, isFaceUp: true } : card
    );
    setCards(newCards);
  };

  const handleMatch = (firstIndex: number, secondIndex: number) => {
    const newCards = cards.map((card) => {
      const { index } = card;
      if (index === firstIndex || index === secondIndex) {
        return { ...card, isGuessed: true };
      }
      return card;
    });
    setCards(newCards);
    currentCards.splice(0);
  };

  const handleNoMatch = (firstIndex: number, secondIndex: number) => {
    setIsPaused(true);
    setTimeout(() => {
      const newCards = cards.map((card) => {
        const { index } = card;
        if (index === firstIndex || index === secondIndex) {
          return { ...card, isFaceUp: false };
        }
        return card;
      });
      setCards(newCards);
      currentCards.splice(0);
      setIsPaused(false);
    }, 500);
  };

  const checkForMatch = () => {
    const [firstCard, secondCard] = currentCards;

    const firstCardIndex = firstCard.index;
    const firstCardName = firstCard.name;
    const secondCardIndex = secondCard.index;
    const secondCardName = secondCard.name;

    if (firstCardName === secondCardName && firstCardIndex !== secondCardIndex)
      handleMatch(firstCardIndex, secondCardIndex);
    else handleNoMatch(firstCardIndex, secondCardIndex);
  };

  return (
    <>
      <div className="card-container">
        {cards.map((card) => {
          const { index } = card;
          return (
            <Card
              key={nextId()}
              checkForMatch={checkForMatch}
              handleMatch={handleMatch}
              handleNoMatch={handleNoMatch}
              flipCard={flipCard}
              setIsPaused={setIsPaused}
              currentCards={currentCards}
              index={index}
              isPaused={isPaused}
              cards={cards}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
