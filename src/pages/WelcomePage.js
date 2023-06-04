import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
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
      <h1>Welcome to Rock Paper Scissors!</h1>
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
        Play
      </button>
    </div>
  );
}
