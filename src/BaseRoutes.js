import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ScorePage from "./pages/ScorePage";
import PlayPage from "./pages/PlayPage";
import React from "react";

const ScoreContext = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/play",
    element: <PlayPage />,
  },
  {
    path: "/score",
    element: <ScorePage />,
  },
]);

function BaseRoutes() {
  const [score, setScore] = React.useState({
    playerScore: 0,
    computerScore: 0,
  });

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <RouterProvider router={router} />
    </ScoreContext.Provider>
  );
}

export { BaseRoutes, ScoreContext };
