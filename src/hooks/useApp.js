import useAppContext from "./useAppContext";

export default () => {
  const { state, dispatch } = useAppContext();

  const { turns, winner } = state;
  const setWinner = (isWinner) => {
    dispatch({
      type: "SET_WINNER",
      payload: isWinner,
    });
  };
  const incrementTurns = () => {
    dispatch({
      type: "INCREMENT_TURNS",
    });
  };

  return {
    turns,
    incrementTurns,
    winner,
    setWinner,
  };
};
