// file: large-bytes/plannd/plannd-client/src/components/navigation/NavBar.tsx

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/staff">Staff</NavLink>
        <NavLink to="/rota">Rota</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
