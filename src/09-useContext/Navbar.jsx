import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
      <Link className="navbar-brand" to="/">
        Use Context
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={isActive}>
            About
          </NavLink>
          <NavLink to="/login" className={isActive}>
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const isActive = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;
