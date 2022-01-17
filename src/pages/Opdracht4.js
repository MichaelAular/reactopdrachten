import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { useEffect } from "react/cjs/react.development";

const Opdracht4 = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState('');

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      key: uuidv4(),
      task: userInput,
      done: false
    };
    setTasks([ newTask, ...tasks]);
    console.log(newTask)
  }

  const changeHandler = (e) => {
        setUserInput(e.target.value)
  }

  useEffect (() => {
    document.title = `You've got ${tasks.length} task(s) to do!`;
  })

  function ClearTask() {
      console.log('Clear')
  }

  function CheckTask() {
    console.log('check');
    const check = document.querySelector('.check');
    check.classList.add('checked');
    check.classList.remove('unchecked');
}

  return (
    <main>
      <h2> The To-Do-List</h2>
      <input id="inputTask" onChange={changeHandler} placeholder="Things I Need To Do" />
      <button onClick={addTask}>Submit To Do!</button>

      <ul className="list">
        {tasks.map((item) =>
          <li key={item.key} status={item.status}>
              <FaCheck className="icons check unchecked" id={uuidv4()} role="button" onClick={CheckTask}/>
              {item.task}
              <FaTrashAlt className="icons delete" key={item.key} role="button" onClick={ClearTask}/>
          </li>)}
      </ul>
    </main>
  );
};

export default Opdracht4