import { NavLink } from "react-router-dom";

const NavBar = ({ snacksNum }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <NavLink className="btn btn-sm text-white" to="/vend">
          Vending Machine
        </NavLink>
        <NavLink className="btn btn-sm text-white" to="/backpack">
          <span>Backpack</span>
          <span className="badge bg-warning ms-1">{snacksNum}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
