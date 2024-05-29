import { NavLink } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <h1>SAKIley</h1>
        </div>
        <div className="listing">
          <ul>
            <NavLink
              to="/hotels"
              className={({ isActive }) => (isActive ? "activeClass" : "class")}
            >
              Hotels
            </NavLink>
            <li>Your list</li>
            <li>Apartmens</li>
            <li>About us</li>
          </ul>
          <button>Log in</button>
        </div>
      </div>
    </header>
  );
}
