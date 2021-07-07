import React, { useState } from "react";
import nextId from "react-id-generator";
import "./CardContainerStyles.css";

interface Card {
  name: string;
  isFlipped: boolean;
  isGuessed: boolean;
}

const cards: Card[] = [
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
];

const CardContainer: React.FC = () => {
  const currentItems: Card[] = [];
  const [checkResult, setCheckResult] = useState("is there a match?");

  const checkForMatch = () => {
    const [firstCardValue, secondCardValue] = currentItems;
    if (firstCardValue.name === secondCardValue.name) setCheckResult("match");
    else setCheckResult("no match");
  };

  return (
    <div className="card-container">
      <p>Check result: {checkResult}</p>
      {cards.map((card) => {
        const { name } = card;
        return (
          <div
            onClick={() => {
              currentItems.push(card);
              console.log(currentItems);
              if (currentItems.length === 2) {
                checkForMatch();
                currentItems.splice(0);
              }
            }}
            className="card"
            key={nextId()}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
