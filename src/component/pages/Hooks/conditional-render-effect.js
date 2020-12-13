import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("ini update effect");
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <p>counter is : {count}</p>
    </div>
  );
}

export default Hooks;
