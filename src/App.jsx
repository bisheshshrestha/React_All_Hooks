import React from "react";
import Counter from "../hooks/useState/Counter";
import FetchData from "../hooks/useEffect/FetchData";
import ChangeBackground from "../hooks/useLayoutEffect/ChangeBackground";

const App = () => {
  return (
    <div>
      {/* useState hook */}
      {/* <Counter /> */}

      {/* useEffect hook */}
      {/* <FetchData /> */}

      {/* useLayoutEffect hook */}
      <ChangeBackground />
    </div>
  );
};

export default App;
