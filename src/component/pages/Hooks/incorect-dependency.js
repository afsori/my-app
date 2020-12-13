import React, { useState, useEffect } from "react";
function Hooks() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    console.log("useEffect called");
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // render effect once time
  return (
    <div>
      <button>{count}</button>
    </div>
  );
}

export default Hooks;
