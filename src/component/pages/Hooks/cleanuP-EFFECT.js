import React, { useState, useEffect } from "react";
import Only from "./render-onliy-once-time";
function Hooks() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log("useEffect called");
  }, []); // render effect once time
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Klik</button>
      {display && <Only />}
    </div>
  );
}

export default Hooks;
