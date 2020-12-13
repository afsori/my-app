import React, { useState, useEffect } from "react";

function Hooks() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    // console.log(event, "even running");
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //cleanup function
    return () => {
      console.log("remove listener or cleanUp");
      window.removeEventListener("mouseleave", logMousePosition);
    };
  }, []); // render effect once time
  return (
    <div>
      <p>
        X - {x} - Y - {y}
      </p>
    </div>
  );
}

export default Hooks;
