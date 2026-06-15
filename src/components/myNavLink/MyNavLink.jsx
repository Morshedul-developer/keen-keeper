import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink className={({isActive})=>`${isActive ? 'bg-[#244D3F] text-white' : ''} btn`} to={to}>
      {children}
    </NavLink>
  );
};

export default MyNavLink;
