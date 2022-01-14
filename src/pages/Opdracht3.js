import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Opdracht3() {
  const [names, setNames] = useState([]);
  function handleInput() {
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
      <h2>Opdracht 3</h2>

      <input id="input" />
      <button onClick={handleInput}>Submit Name</button>

      <h4>Input met key</h4>
      <ul className="green">
        {names.map(item =>
        <li key={item.key}>{item.value}</li>)}
      </ul>

    </div>
  )
}