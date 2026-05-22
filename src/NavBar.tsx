
import { Link } from "react-router";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div>
          <Link to={"/"}>Logo</Link>
        </div>
        <div>
          <ul>
            <li className="navLinks">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navlinks">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="navlinks">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
