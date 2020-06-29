import React, { useEffect, useState } from "react";
import useApp from "../../hooks/useApp";
import getData, { getDataById } from "../../api/getData";
import "./Cards.css";
import Card from "../Card/Card";

const SETTINGS = {
  clearSelectedTimeout: 800,
};

const initialState = { selected: {}, matched: {} };

const Cards = () => {
  const appState = useApp();
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  const handleSelectCard = (id) => {
    const selectedKeys = Object.keys(cards.selected);
    if (
      selectedKeys.length > 1 ||
      cards.selected.hasOwnProperty(id) ||
      cards.matched.hasOwnProperty(id)
    )
      return;

    appState.incrementTurns();

    if (!selectedKeys.length) {
      setCards({ ...cards, selected: { [id]: true } });
      return;
    }

    const firstCardId = selectedKeys[0];
    if (getDataById(firstCardId, data).label === getDataById(id, data).label) {
      const matched = { ...cards.matched, [firstCardId]: true, [id]: true };
      setCards({ ...cards, matched, selected: initialState.selected });
      if (Object.keys(matched).length === data.length) {
        appState.setWinner(true);
      }
    } else {
      setCards({ ...cards, selected: { ...cards.selected, [id]: true } });
      setTimeout(() => {
        setCards({ ...cards, selected: initialState.selected });
      }, SETTINGS.clearSelectedTimeout);
    }
  };

  return (
    <main className="Main">
      <div className="Cards">
        {data.map((card, i) => (
          <Card
            {...card}
            key={`card_${card.id}`}
            index={i}
            isMatched={cards.matched.hasOwnProperty(card.id)}
            selectCard={(id) => handleSelectCard(id)}
            isSelected={cards.selected.hasOwnProperty(card.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default Cards;
