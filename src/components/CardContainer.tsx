import React, { useState } from "react";
import "./CardContainerStyles.css";
import Card from "./Card";
import CardInterface from "../interfaces/CardInterface";
import GameCards from "../gameFiles/GameCards";

const currentCards: CardInterface[] = [];
const gameCards: CardInterface[] = GameCards.sort(() => Math.random() - 0.5); //shuffle elements in array

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
    const { index: firstCardIndex, name: firstCardName } = firstCard;
    const { index: secondCardIndex, name: secondCardName } = secondCard;

    if (
      firstCardName === secondCardName &&
      firstCardIndex !== secondCardIndex
    ) {
      handleMatch(firstCardIndex, secondCardIndex);
    } else handleNoMatch(firstCardIndex, secondCardIndex);
  };

  return (
    <>
      <div className="card-container">
        {cards.map((card) => {
          const { index } = card;
          return (
            <Card
              key={index}
              checkForMatch={checkForMatch}
              flipCard={flipCard}
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
