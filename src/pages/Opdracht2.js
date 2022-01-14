import { useState } from 'react';
import ClassComponent from '../components/ClassComponent';
import FunctionalComponent from '../components/FunctionalComponent';

const Opdracht2 = ()  => {
    const [title, setTitle] = useState("Michael");
    const setTitleHandler = (event) => {setTitle(event.target.value)}
    
    return (
      <div className="Opdracht2">
        <ClassComponent title2={title} setTitleHandler={setTitleHandler}/>
        <FunctionalComponent title2={title} setTitleHandler={setTitleHandler} />
      </div>
    );
  }

  export default Opdracht2