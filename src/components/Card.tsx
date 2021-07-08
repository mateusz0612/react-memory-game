import React, { useRef } from "react";
import CardPropsInterface from "../interfaces/CardPropsInterface";
import images from "../gameFiles/Images";

const Card: React.FC<CardPropsInterface> = ({
  index,
  currentCards,
  isPaused,
  cards,
  checkForMatch,
  flipCard,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const card = cards[index];
  const { name, isFaceUp, isGuessed } = card;

  return (
    <div
      ref={divRef}
      // className="card"
      onClick={() => {
        if (!isPaused) {
          flipCard(index);
          currentCards.push(card);
          if (currentCards.length === 2) {
            checkForMatch();
          }
        }
      }}
    >
      <img
        className="card"
        src={isFaceUp || isGuessed ? images[name] : images.defaultPhoto}
        alt={name}
      />
    </div>
  );
};

export default Card;
