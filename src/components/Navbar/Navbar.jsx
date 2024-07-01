import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/">
            <h1 className="logo-text">SAKIley</h1>
          </NavLink>
        </div>
        {loggedInUser && (
          <div className="listing">
            <ul>
              <NavLink
                to="/hotels"
                className={({ isActive }) =>
                  isActive ? "active-link li" : "classic-link li"
                }
              >
                Hotels
              </NavLink>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  isActive ? "active-link li" : "classic-link li"
                }
              >
                Teams
              </NavLink>
              <NavLink
                to="/quotes"
                className={({ isActive }) =>
                  isActive ? "active-link li" : "classic-link li"
                }
              >
                Quotes
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "active-link li" : "classic-link li"
                }
              >
                About us
              </NavLink>
            </ul>
            <button
              onClick={() => {
                setLoggedInUser(null);
                localStorage.removeItem("loggedInUser");
                navigate("auth");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
