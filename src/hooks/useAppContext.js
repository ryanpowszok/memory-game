import { useContext } from "react";
import { AppContext } from "../providers/appProvider";

export default () => {
  const appContext = useContext(AppContext);
  return {
    state: appContext[0],
    dispatch: appContext[1],
  };
};
