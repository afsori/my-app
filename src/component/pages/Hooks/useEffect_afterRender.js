import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("ini useeffect");
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <p>counter is : {count}</p>
    </div>
  );
}

export default Hooks;
