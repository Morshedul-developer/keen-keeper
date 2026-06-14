import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";

const MyNavLink = ({to, children}) => {
  return (
    <NavLink className="flex items-center gap-1" to={to}>
      <RiHome2Line />
      {children}
    </NavLink>
  );
};

export default MyNavLink;
