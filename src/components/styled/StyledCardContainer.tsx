import styled from "styled-components";

const StyledCardContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  animation: appear 1.5s;

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export default StyledCardContainer;
