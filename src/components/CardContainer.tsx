import React, { useState } from "react";
import "./CardContainerStyles.css";
import Card from "./Card";
import CardInterface from "../interfaces/CardInterface";
import nextId from "react-id-generator";

const currentCards: CardInterface[] = [];

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<CardInterface[]>([
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
  ]);

  return (
    <>
      <div className="card-container">
        {cards.map((card) => {
          const { index } = card;
          return (
            <Card
              cards={cards}
              currentCards={currentCards}
              setCards={setCards}
              index={index}
              key={nextId()}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
