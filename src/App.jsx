import React from "react";
import Counter from "../hooks/useState/Counter";
import FetchData from "../hooks/useEffect/FetchData";
import ChangeBackground from "../hooks/useLayoutEffect/ChangeBackground";
import NepalGov from "../hooks/useContext/props_drilling/NepalGov";
import Reducer from "../hooks/useReducer/Reducer";
import Cart from "../hooks/useMemo/Cart";
import Index from "../hooks/useTransition/Index";
// import Index from "../hooks/useCallback/Index";

const App = () => {
  return (
    <div>
      {/* useState hook */}
      {/* <Counter /> */}

      {/* useEffect hook */}
      {/* <FetchData /> */}

      {/* useLayoutEffect hook */}
      {/* <ChangeBackground /> */}

      {/* useContext hook */}
      {/* <NepalGov /> */}

      {/* useReducer hook */}
      {/* <Reducer /> */}

      {/* useMemo hook */}
      {/* <Cart /> */}

      {/* useCallback hook */}
      {/* <Index /> */}

      {/* useTransition hook */}
      <Index />
    </div>
  );
};

export default App;
