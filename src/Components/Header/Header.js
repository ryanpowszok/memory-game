import React from "react";
import useApp from "../../hooks/useApp";
import "./Header.css";

const Header = () => {
  const appState = useApp();
  return (
    <header className="Header">
      <h1 className="Header__title">Memory Game</h1>
      {appState.turns > 0 && (
        <div className="Header__turns">
          {appState.turns} Turn{appState.turns !== 1 && "s"}
        </div>
      )}
      {appState.winner && (
        <h2 className="Header__subtitle">Winner Winner Chicken Dinner</h2>
      )}
    </header>
  );
};

export default Header;
