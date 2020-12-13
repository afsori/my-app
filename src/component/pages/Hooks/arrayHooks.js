import React from "react";
import { useState } from "react";

function Hooks() {
  const [items, setItems] = useState([]);

  const addCounter = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addCounter}>counter +</button>
      <ul>
        {items.map((result) => (
          <li key={result.id}>{result.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hooks;
