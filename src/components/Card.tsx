import React, { useRef } from "react";
import CardPropsInterface from "../interfaces/CardPropsInterface";
import images from "../images";

const Card: React.FC<CardPropsInterface> = ({
  index,
  currentCards,
  isPaused,
  cards,
  handleMatch,
  handleNoMatch,
  checkForMatch,
  flipCard,
  setIsPaused,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

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
