import react from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
return (
  <div className="Navlist">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Opdracht2">opdracht 1 en 2</Link>
    </li>
    <li>
      <Link to="/Opdracht3">opdracht 3</Link>
    </li>
  </ul>
  </div>
  )
}