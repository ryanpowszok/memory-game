export const initialState = {
  winner: false,
  turns: 0,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_WINNER":
      return {
        ...state,
        winner: action.payload,
      };
    case "INCREMENT_TURNS":
      return {
        ...state,
        turns: state.turns + 1,
      };

    default:
      throw new Error("Unexpected action");
  }
};
export default appReducer;
