import { NavLink } from "react-router";

const MyNavLink = ({ to, children, className }) => {
  return (
    <NavLink className={({isActive})=>`${isActive ? 'bg-[#244D3F] text-white' : ''} btn ${className}`} to={to}>
      {children}
    </NavLink>
  );
};

export default MyNavLink;
