import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink className="flex items-center gap-1" to={to}>
      {children}
    </NavLink>
  );
};

export default MyNavLink;
