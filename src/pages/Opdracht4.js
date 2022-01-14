import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const Opdracht4 = () => {
  const [tasks, setTasks] = useState([]);

  function taskInputHandler() {
    let input = document.querySelector("input");
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

  function ClearTask() {
      console.log('Clear')
  }

  function CheckTask() {
    console.log('Check')
}

  return (
    <main>
      <h2> The To-Do-List</h2>
      <input id="inputTask" placeholder="Things I need to Do" />
      <button onClick={taskInputHandler}>Submit To Do!</button>

      <ul className="list">
        {tasks.map((item) =>
          <li key={item.key}>
              <FaCheck className="icons ckeck unchecked" role="button" onClick={CheckTask}/>
              {item.value}
              <FaTrashAlt className="icons delete" role="button" onClick={ClearTask}/>
          </li>)}
      </ul>
    </main>
  );
};

export default Opdracht4