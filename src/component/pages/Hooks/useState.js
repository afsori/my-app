import React from "react";
import { useState } from "react";

function Hooks() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);

  const counterMin = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const ResetBtn = () => {
    setCount(initialState);
  };
  const inCreFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <p>Count : {count}</p>

      <button onClick={() => setCount(count + 1)}>Counter +</button>
      <button onClick={counterMin}>Counter -</button>
      <button onClick={ResetBtn}>Reset -</button>
      <button onClick={inCreFive}>inCreFive</button>
    </div>
  );
}

export default Hooks;
