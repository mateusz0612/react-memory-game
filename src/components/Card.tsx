import React from "react";
import CardPropsInterface from "../interfaces/CardPropsInterface";
import images from "../gameFiles/Images";
import StyledCard from "./styled/StyledCard";
import ReactCardFlip from "react-card-flip";

const Card: React.FC<CardPropsInterface> = ({
  index,
  currentCards,
  isPaused,
  cards,
  checkForMatch,
  flipCard,
}) => {
  const card = cards[index];
  const { name, isFaceUp, isGuessed } = card;

  return (
    <div
      style={{
        margin: "0.7rem",
      }}
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
      <ReactCardFlip
        isFlipped={isFaceUp || isGuessed}
        flipDirection="horizontal"
      >
        <StyledCard src={images.defaultPhoto} alt={name} />
        <StyledCard src={images[name]} alt={name} />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
