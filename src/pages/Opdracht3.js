import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Opdracht3() {
  const [names, setNames] = useState([]);

  function inputHandler() {
    let input = document.querySelector("input");
    setNames((prevState) => {
      let state = [...prevState];
      const item = {
        value: input.value,
        key: uuidv4()
      };
      state.unshift(item)
      return state
    })
  }

  return (
    <div className="opdracht3">
      <h2>Using Keys</h2>
      <input id="input" placeholder="Input with Key" />
      <button onClick={inputHandler}>Submit Name</button>

      <ul className="list">
        {names.map(item =>
        <li key={item.key}>{item.value}</li>)}
      </ul>
    </div>
  )
}