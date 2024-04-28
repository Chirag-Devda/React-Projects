import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Choices = styled.div`
  display: flex;
  gap: 24px;
`;

const Box = styled.div`
  border: 1px solid;
  height: 72px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  font-family: emoji;
  user-select: none;
  cursor: pointer;
  ${(props) =>
    props.isselected === "true" &&
    css`
      background-color: black;
      color: white;
    `};
`;

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
  display: flex;
  justify-content: center;
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
    cursor: pointer;
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
  const [ComputerDice, setComputerDice] = useState(0);
  const [UserDice, setUserDice] = useState();
  const [TotalScore, setTotalScore] = useState(0);
  const [ShowRules, setShowRules] = useState(false);
  // Array of Dice numbers
  let Dices = [1, 2, 3, 4, 5, 6];

  // Function for making Computer Choice
  const ComputerChoice = () => {
    let random = Math.floor(Math.random() * 6 + 1);
    setComputerDice(random);
  };

  // Function for Total Scores
  const TotalScorefun = () => {
    if (UserDice === ComputerDice) {
      let score = TotalScore + ComputerDice;
      setTotalScore(score);
    } else {
      if (UserDice != undefined) {
        let score = TotalScore - 2;
        setTotalScore(score);
      }
    }
  };

  useEffect(() => {
    TotalScorefun();
  }, [ComputerDice]);

  return (
    <Container>
      <ScoreAndChoiceBoard>
        <ScoresBox>
          <Score>{TotalScore}</Score>
          <Scorecontent>Total Score</Scorecontent>
        </ScoresBox>
        <ChoiceBox>
          <Choices>
            {Dices.map((value, i) => (
              <Box
                key={i}
                isselected={(value === UserDice).toString()}
                onClick={() => {
                  setUserDice(value);
                }}
              >
                {value}
              </Box>
            ))}
          </Choices>
          <span>Select Number</span>
        </ChoiceBox>
      </ScoreAndChoiceBoard>
      <GameContainer>
        <DiceContainer onClick={ComputerChoice}>
          <Dice>{ComputerDice}</Dice>
          <div>Click on Dice To Roll</div>
        </DiceContainer>
        <OptionsButtons>
          <button
            onClick={() => {
              setTotalScore(0);
            }}
          >
            Reset Score
          </button>
          <button
            onClick={() => {
              setShowRules((prev) => !prev);
            }}
          >
            {ShowRules ? "Close Rules" : "Show Rules"}
          </button>
          {ShowRules ? (
            <Rules>
              <h1>How to play dice game </h1>
              <div>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                  after click on dice if selected number is equal to dice number
                  you will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
              </div>
            </Rules>
          ) : (
            <></>
          )}
        </OptionsButtons>
      </GameContainer>
    </Container>
  );
};

export default PlayGame;
const Rules = styled.div`
  background-color: #fbf1f1;
  width: 794px;
  height: 208px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 4px;
  }
`;
