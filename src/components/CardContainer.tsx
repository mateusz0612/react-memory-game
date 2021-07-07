import React, { useState } from "react";
import nextId from "react-id-generator";
import "./CardContainerStyles.css";
import images from "../images";

interface Card {
  name: string;
  isFlipped: boolean;
  isGuessed: boolean;
}

const CardContainer: React.FC = () => {
  const currentCards: Card[] = [];
  const [checkResult, setCheckResult] = useState("is there a match?");
  const [cards, setCards] = useState<Card[]>([
    {
      name: "react",
      isFlipped: false,
      isGuessed: false,
    },
    {
      name: "angular",
      isFlipped: false,
      isGuessed: false,
    },
    {
      name: "react",
      isFlipped: false,
      isGuessed: false,
    },
    {
      name: "angular",
      isFlipped: false,
      isGuessed: false,
    },
  ]);

  const checkForMatch = () => {
    const [firstCardValue, secondCardValue] = currentCards;
    if (firstCardValue.name === secondCardValue.name) setCheckResult("match");
    else setCheckResult("no match");
  };

  return (
    <>
      <p>Check result: {checkResult}</p>
      <div className="card-container">
        {cards.map((card, index) => {
          const { name, isFlipped } = card;
          return (
            <div
              onClick={() => {
                currentCards.push(card);
                console.log(currentCards);
                if (currentCards.length === 2) {
                  checkForMatch();
                  currentCards.splice(0);
                }
              }}
              className="card"
              key={nextId()}
            >
              <img
                src={isFlipped ? images[name] : images.defaultPhoto}
                alt={name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
