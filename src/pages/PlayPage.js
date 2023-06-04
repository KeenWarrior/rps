import { useNavigate } from "react-router-dom";
import "../App.css";
import { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../BaseRoutes";

function PlayPage() {
  const { setScore } = useContext(ScoreContext);

  const [stepsLeft, setStepsLeft] = useState(10);
  const navigate = useNavigate();

  const hands = {
    ROCK: {
      name: "Rock",
      beats: "SCISSORS",
      symbol: "✊",
    },
    PAPER: {
      name: "Paper",
      beats: "ROCK",
      symbol: "✋",
    },
    SCISSORS: {
      name: "Scissors",
      beats: "PAPER",
      symbol: "✌️",
    },
    DEFAULT: {
      name: "Default",
      beats: "DEFAULT",
      symbol: "🤷‍♂️",
    },
  };

  const initialGameState = {
    playerHand: "DEFAULT",
    computerHand: "DEFAULT",
    playerScore: 0,
    computerScore: 0,
  };

  const handOptions = ["ROCK", "PAPER", "SCISSORS"];

  const [gameState, setGameState] = useState(initialGameState);

  const computerChooseHand = () => {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  };

  const determineWinnerCurrent = (playerHand, computerHand) => {
    if (hands[playerHand].beats === computerHand) {
      return [1, 0];
    } else if (hands[computerHand].beats === playerHand) {
      return [0, 1];
    } else {
      return [0, 0];
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <h1>{stepsLeft} Steps Left</h1>

      <h2
        style={{
          fontSize: "50px",
        }}
      >
        {gameState.playerScore} / {gameState.computerScore}
      </h2>

      <div
        className="currentSelections"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="playerSelection"
          style={{
            flexGrow: 1,
          }}
        >
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            {hands[gameState.playerHand].name}
          </h2>
        </div>
        <div
          className="computerSelection"
          style={{
            flexGrow: 1,
          }}
        >
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            {hands[gameState.computerHand].name}
          </h2>
        </div>
      </div>
      <div
        className="currentSelections"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="playerSelection"
          style={{
            flexGrow: 1,
          }}
        >
          <h2
            style={{
              margin: "30px",
              fontSize: "100px",
            }}
          >
            {hands[gameState.playerHand].symbol}
          </h2>
        </div>
        <div
          className="computerSelection"
          style={{
            flexGrow: 1,
          }}
        >
          <h2
            style={{
              fontSize: "100px",
              margin: "30px",
            }}
          >
            {hands[gameState.computerHand].symbol}
          </h2>
        </div>
      </div>
      <div className="handButtons">
        {handOptions.map((handOption) => {
          return (
            <button
              key={handOption}
              className="optionButton"
              onClick={() => {
                const updatedUserHand = handOption;
                const updatedComputerHand = computerChooseHand();
                const [deltaUserScore, deltaComputerScore] =
                  determineWinnerCurrent(updatedUserHand, updatedComputerHand);
                const updatedUserScore = gameState.playerScore + deltaUserScore;
                const updatedComputerScore =
                  gameState.computerScore + deltaComputerScore;

                setGameState({
                  ...gameState,
                  playerHand: updatedUserHand,
                  computerHand: updatedComputerHand,
                  playerScore: updatedUserScore,
                  computerScore: updatedComputerScore,
                });

                const remainingSteps = stepsLeft - 1;

                if (remainingSteps === 0) {
                  setScore({
                    playerScore: updatedUserScore,
                    computerScore: updatedComputerScore,
                  });
                  navigate("/score");
                }

                setStepsLeft(remainingSteps);
              }}
            >
              {handOption}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PlayPage;
