import styled from "styled-components";

const StyledCard = styled.img`
  width: 4.5rem;
  height: 5.5rem;
  border-radius: 15px;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #ccc;
  }

  @media only screen and (min-width: 360px) {
    width: 5rem;
    height: 6rem;
  }

  @media only screen and (min-width: 768px) {
    width: 7.5rem;
    height: 8.5rem;
  }
`;

export default StyledCard;
