import React from "react";
import styled from "styled-components";

// Styles
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Playybtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Heading = styled.h1`
  font-size: 96px;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (max-width: 1180px) {
    font-size: 4rem;
  }
`;
const Buttton = styled.button`
  background-color: black;
  color: #ffffff;
  height: 44px;
  width: 220px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 10px 18px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  @media screen and (max-width: 1180px) and (min-width: 767px) {
    img {
      width: 50vw;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 80vw;
    }
  }
`;
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dices 1.png" />
      </ImageContainer>
      <Playybtn>
        <Heading>Dice Game</Heading>
        <Buttton onClick={toggle}>Play Now</Buttton>
      </Playybtn>
    </Container>
  );
};

export default StartGame;
