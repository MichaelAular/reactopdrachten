import { useState } from 'react';
import { Link } from "react-router-dom";
import ClassComponent from '../components/ClassComponent';
import FunctionalComponent from '../components/FunctionalComponent';

export default function Opdracht2()  {
    const [title, setTitle] = useState("Michael");
    const setTitleHandler = (event) => {setTitle(event.target.value)}
    return (
      <div className="Opdracht2">
        <ClassComponent title2={title} setTitleHandler={setTitleHandler}/>
        <FunctionalComponent title2={title} setTitleHandler={setTitleHandler} />
        <nav>
         <Link to="/">Home</Link>
     </nav>
      </div>
    );
  }