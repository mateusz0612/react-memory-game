import { useState, useCallback } from "react";
import CardInterface from "../interfaces/CardInterface";
import GameCards from "../gameFiles/GameCards";

const gameCards: CardInterface[] = GameCards.sort(() => Math.random() - 0.5); //shuffle elements in array

const useMatch = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>(gameCards);
  const [currentCards, setCurrentCards] = useState<CardInterface[]>([]);

  const flipCard = (cardIndex: number) => {
    const newCards = cards.map((card, index) =>
      cardIndex === index ? { ...card, isFaceUp: true } : card
    );
    setCards(newCards);
  };

  const handleMatch = useCallback(
    (firstIndex: number, secondIndex: number) => {
      const newCards = cards.map((card) => {
        const { index } = card;
        if (index === firstIndex || index === secondIndex) {
          return { ...card, isGuessed: true };
        }
        return card;
      });
      setCards(newCards);
    },
    [cards, setCards]
  );

  const handleNoMatch = useCallback(
    (firstIndex: number, secondIndex: number) => {
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
        setIsPaused(false);
      }, 500);
    },
    [cards, setCards, setIsPaused]
  );

  const checkForMatch = useCallback(() => {
    const [firstCard, secondCard] = currentCards;
    const { index: firstCardIndex, name: firstCardName } = firstCard;
    const { index: secondCardIndex, name: secondCardName } = secondCard;

    if (
      firstCardName === secondCardName &&
      firstCardIndex !== secondCardIndex
    ) {
      handleMatch(firstCardIndex, secondCardIndex);
    } else handleNoMatch(firstCardIndex, secondCardIndex);
  }, [currentCards, handleMatch, handleNoMatch]);

  return {
    cards,
    setCards,
    currentCards,
    setCurrentCards,
    isPaused,
    checkForMatch,
    flipCard,
  };
};

export default useMatch;
