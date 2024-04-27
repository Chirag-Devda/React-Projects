import React from "react";
import styled from "styled-components";
import { useState } from "react";

// Styles
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
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

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="" />
      </div>
      <Playybtn>
        <Heading>Dice Game</Heading>
        <Buttton onClick={toggle}>Play Now</Buttton>
      </Playybtn>
    </Container>
  );
};

export default StartGame;
