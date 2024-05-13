import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const PlayGame = () => {
  const [ComputerDice, setComputerDice] = useState(1);
  const [UserDice, setUserDice] = useState();
  const [TotalScore, setTotalScore] = useState(0);
  const [ShowRules, setShowRules] = useState(false);
  const [Error, setError] = useState("");
  // Array of Dice numbers
  let Dices = [1, 2, 3, 4, 5, 6];

  // Function for making Computer Choice
  const ComputerChoice = () => {
    if (!UserDice) {
      setError("You have not selected any number");
      return;
    } // this will stop dice to roll when userDice was not selected
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
    setUserDice(undefined);
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
          <span className="Error">{Error}</span>
          <Choices>
            {Dices.map((value, i) => (
              <Box
                key={i}
                isselected={(value === UserDice).toString()}
                onClick={() => {
                  setUserDice(value);
                  setError(""); // when userDice was selected
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
          <Dice>
            <img
              src={`images/Dice/dice_${ComputerDice}.png`}
              alt={`Dice ${ComputerDice}`}
            />
          </Dice>
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

  @media screen and (max-width: 768px) {
    width: 11vw;
    height: 6vh;
    font-size: 1.3rem;
  }
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
  gap: 593px;
  @media screen and (max-width: 1280px) and (min-width: 767px) {
    gap: 0px;
    justify-content: space-around;
    width: 90vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    gap: 0px;
  }
`;

const ScoresBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  height: 151px;

  @media screen and (max-width: 768px) {
    align-self: flex-start;
    align-items: center;
    flex-direction: row;
    height: 100%;
    gap: 10px;
  }
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
  font-size: 100px;
  font-weight: medium;
  width: 62px;
  height: 112px;
  @media screen and (max-width: 768px) {
    align-items: center;
    font-size: 3rem;
    height: 100%;
  }
`;
const Scorecontent = styled.div`
  font-size: 24px;
  font-weight: normal;
  width: 135px;
  height: 36px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    font-size: 1rem;
    align-items: center;
  }
`;
const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  span {
    font-size: 24px;
    font-weight: bold;
  }
  .Error {
    color: red;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1.3rem;
    }
    .Error {
      font-size: 1rem;
    }
  }
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  height: 100vh;
  justify-content: center;
`;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div + div {
    font-size: 24px;
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    & > div + div {
      font-size: 1rem;
    }
  }
`;
const Dice = styled.div`
  cursor: pointer;
  @media screen and (max-width: 768px) {
    img {
      width: 30vw;
    }
  }
`;
const OptionsButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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

  @media screen and (max-width: 768px) {
    button {
      width: 40vw;
    }
  }
`;

const Rules = styled.div`
  border-radius: 5px;
  background-color: #fbf1f1;
  width: 794px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 5px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 4px;
  }
  @media screen and (max-width: 768px) {
    width: 93vw;
    margin-top: 50px;
    h1 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
