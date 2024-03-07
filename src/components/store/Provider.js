import { useReducer } from "react";
import Context from "./Context";
import logger from "./logger";

import reducer, { InitState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), InitState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
