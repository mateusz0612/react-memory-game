import React, { useRef } from "react";
import CardInterface from "../interfaces/CardInterface";
import CardPropsInterface from "../interfaces/CardPropsInterface";
import images from "../images";

const Card: React.FC<CardPropsInterface> = ({
  index,
  cards,
  setCards,
  currentCards,
  isPaused,
  setIsPaused,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

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
    divRef.current!.style.border = "10px solid black";
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

  const card = cards[index];
  const { name, isFaceUp, isGuessed } = card;

  return (
    <div
      ref={divRef}
      className="card"
      onClick={() => {
        if (!isPaused) {
          flipCard(index);
          currentCards.push(card);
          if (currentCards.length === 2) {
            checkForMatch();
          }
        }
      }}
      style={{
        backgroundImage:
          isFaceUp || isGuessed
            ? `url(${images[name]})`
            : `url(${images.defaultPhoto})`,
      }}
    ></div>
  );
};

export default Card;
