// file: large-bytes/plannd/plannd-client/src/components/navigation/NavBar.tsx

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex gap-6 justify-end">
      <ul className="flex gap-6 m-3">
        <NavLink className="active:" to="/">Rota</NavLink>
        <NavLink to="/staff">Staff</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
