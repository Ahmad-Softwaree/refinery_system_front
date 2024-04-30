import { useState, useCallback } from "react";

function useDynamicState(initialState) {
  const [state, setState] = useState(initialState);

  const updateState = useCallback((key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const replaceState = (object) => setState(object);

  return { state, updateState, replaceState };
}

export default useDynamicState;
