import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";

const NavBar = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <input type="checkbox" onChange={toggleTheme} />
    </div>
  );
};

export default NavBar;
