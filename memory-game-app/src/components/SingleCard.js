import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="cart front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="cart back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
