import { NavLink } from "react-router-dom";

import "./style.css";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Watch List",
    path: "/watch-list",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About",
    path: "/about",
  }
];

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-left-container">
        <span className="nav-title">TheMovieDB App</span>
      </div>

      <div className="nav-right-container">
        <ul className="nav-link-container">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : undefined
                }
                to={link.path}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
