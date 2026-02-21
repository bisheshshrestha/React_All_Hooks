import React from "react";
import Counter from "../hooks/useState/Counter";
import FetchData from "../hooks/useEffect/FetchData";
import ChangeBackground from "../hooks/useLayoutEffect/ChangeBackground";
import NepalGov from "../hooks/useContext/props_drilling/NepalGov";

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
      <NepalGov />
    </div>
  );
};

export default App;
