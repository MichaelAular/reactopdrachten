import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Opdracht4 = () => {
  const [tasks, setTasks] = useState([]);

  function taskInput() {
    let input = document.querySelector("inputTask");
    setTasks((prevState) => {
      let state = [...prevState];
      const item = {
        value: input.value,
        key: uuidv4(),
      };
      state.unshift(item);
      return state;
    });
  }

  return (
    <main>
      <h2> The ULTIMATE To-Do-List!</h2>
      <input id="inputTask" placeholder="Things I need to Do" />
      <button onClick={taskInput}>Submit Task</button>

      <ul className="green">
        {tasks.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </main>
  );
};

export default Opdracht4