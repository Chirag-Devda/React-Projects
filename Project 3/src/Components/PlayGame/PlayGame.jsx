import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScoreAndChoiceBoard = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 64px;
  height: 151px;
  gap: 593px;
`;

const ScoresBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  height: 151px;
`;
const Score = styled.div`
  font-size: 100px;
  font-weight: medium;
  width: 62px;
  height: 112px;
`;
const Scorecontent = styled.div`
  font-size: 24px;
  font-weight: normal;
  width: 135px;
  height: 36px;
  position: absolute;
  top: 115px;
`;
const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;
const Choices = styled.div`
  display: flex;
  gap: 24px;

  div {
    border: 1px solid;
    height: 72px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    font-family: emoji;
  }
`;

const GameContainer = styled.div`
  width: 250px;
  height: 449px;
  position: absolute;
  top: 263px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  & > div + div {
    font-size: 24px;
    font-weight: normal;
  }
`;
const Dice = styled.div`
  width: 190px;
  height: 190px;
  background-color: #000000;
  color: white;
  border: 2px solid black;
  border-radius: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  font-size: 108px;
  font-family: emoji;
  user-select: none; /* Disable text selection */
`;
const OptionsButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > button {
    width: 220px;
    height: 44px;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
  }

  & > button:first-child {
    background-color: #ffffff;
    border: 0.7px solid black;
  }

  & > button + button {
    background-color: #000000;
    color: white;
  }
`;

const PlayGame = () => {
  const [Computer, setComputer] = useState(1);
  const ComputerChoice = () => {
    let random = Math.floor(Math.random() * 6 + 1);
    setComputer(random);
    console.log(Computer);
  };
  return (
    <Container>
      <ScoreAndChoiceBoard>
        <ScoresBox>
          <Score>0</Score>
          <Scorecontent>Total Score</Scorecontent>
        </ScoresBox>
        <ChoiceBox>
          <Choices>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Choices>
          <span>Select Number</span>
        </ChoiceBox>
      </ScoreAndChoiceBoard>
      <GameContainer>
        <DiceContainer>
          <Dice onClick={ComputerChoice}>{Computer}</Dice>
          <div>Click on Dice To Roll</div>
        </DiceContainer>
        <OptionsButtons>
          <button>Reset Score</button>
          <button>Show Rules</button>
        </OptionsButtons>
      </GameContainer>
    </Container>
  );
};

export default PlayGame;
