import React from "react";
import { useState } from "react";

function Hooks() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const onChangeInput = (e) => {
    let nama = { ...name };
    nama[e.target.name] = e.target.value;
    setName(nama);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={onChangeInput}
        />

        <p>firstName is : {name.firstName}</p>
        <p>lastName is : {name.lastName}</p>
        <p>{JSON.stringify(name)}</p>
      </form>
    </div>
  );
}

export default Hooks;
