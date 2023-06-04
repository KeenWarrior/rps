import { useContext } from "react";
import { ScoreContext } from "../BaseRoutes";
import { useNavigate } from "react-router-dom";

export default function ScorePage() {
  const { score } = useContext(ScoreContext);
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Computer Score : {score.computerScore}</h2>
      <h2>Player Score : {score.playerScore}</h2>
      <button
        style={{
          height: "100px",
          width: "200px",
          fontSize: "50px",
          borderRadius: "20px",
          border: "2px solid #000000",
        }}
        onClick={() => {
          navigate("/play");
        }}
      >
        Restart
      </button>
    </div>
  );
}
