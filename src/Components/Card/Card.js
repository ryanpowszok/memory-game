import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Card.css";

const Card = ({ id, index, isMatched, label, isSelected, selectCard }) => {
  const isFlipped = isMatched || isSelected;

  const select = () => {
    !isSelected && selectCard(id);
  };

  const handleCardClick = (evt) => {
    evt.preventDefault();
    select();
  };

  const handleCardKeyDown = (evt) => {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      select();
    }
  };

  return (
    <div
      className={cn(
        "Card",
        { "Card--flipped": isFlipped },
        { "Card--matched": isMatched }
      )}
      role="button"
      tabIndex="0"
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`Card ${index + 1}`}
    >
      <div className="Card__inner">
        <div className="Card__front" aria-hidden={isFlipped}>
          ?
        </div>
        <div className="Card__back" aria-hidden={!isFlipped}>
          {label}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isMatched: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  selectCard: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Card;
