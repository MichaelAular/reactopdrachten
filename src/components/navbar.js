import { Link } from "react-router-dom";

export default function NavBar() {
return (
  <div className="Navlist">
      <Link to="/">Home</Link>
      <Link to="/Opdracht2">Opdracht 1 en 2</Link>
      <Link to="/Opdracht3">Opdracht 3</Link>
      <Link to="/Opdracht4">Opdracht 4</Link>
  </div>
  )
}