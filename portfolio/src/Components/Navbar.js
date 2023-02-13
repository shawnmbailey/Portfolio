import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/Resume"}>Resume</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      );
}