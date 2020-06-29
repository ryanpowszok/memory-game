import React, { useReducer } from "react";
import AppProvider from "./providers/appProvider";
import appReducer, { initialState } from "./reducers/appReducer";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";

const App = () => {
  const state = useReducer(appReducer, initialState);
  return (
    <div className="App">
      <AppProvider value={state}>
        <Header />
        <Cards />
      </AppProvider>
    </div>
  );
};

export default App;
