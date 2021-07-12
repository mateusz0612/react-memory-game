import React, { useEffect } from "react";
import Card from "./Card";
import StyledCardContainer from "./styled/StyledCardContainer";
import useMatch from "../hooks/useMatch";

const CardContainer: React.FC = () => {
  const {
    cards,
    currentCards,
    setCurrentCards,
    isPaused,
    checkForMatch,
    flipCard,
  } = useMatch();

  useEffect(() => {
    if (currentCards.length === 2) {
      checkForMatch();
      setCurrentCards([]);
    }
  }, [checkForMatch, currentCards, setCurrentCards]);

  return (
    <>
      <StyledCardContainer>
        {cards.map((card) => {
          const { index } = card;
          return (
            <Card
              key={index}
              flipCard={flipCard}
              setCurrentCards={setCurrentCards}
              index={index}
              isPaused={isPaused}
              cards={cards}
            />
          );
        })}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
