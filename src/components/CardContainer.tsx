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
];

const CardContainer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>(gameCards);

  return (
    <>
      <div className="card-container">
        {cards.map((card) => {
          const { index } = card;
          return (
            <Card
              cards={cards}
              currentCards={currentCards}
              index={index}
              setCards={setCards}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
              key={nextId()}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
