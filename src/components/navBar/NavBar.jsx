import { useState } from "react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import MyNavLink from "../myNavLink/MyNavLink";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <RiHome2Line size={16} />, path: "/" },
    { name: "Timeline", icon: <RiTimeLine size={16} />, path: "/timeline" },
    { name: "Stats", icon: <TfiStatsUp size={16} />, path: "/stats" },
  ];

  return (
    <nav className="border-b border-[#E2E8F0] relative">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Link to="/">
          <h3 className="text-xl font-bold text-[#1F2937] cursor-pointer">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </h3>
        </Link>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <TiThMenu size={20} />
        </div>

        <ul className="gap-4 items-center hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <MyNavLink to={item.path}>
                {item.icon}
                {item.name}
              </MyNavLink>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="md:hidden absolute top-full right-0 w-50 bg-white border-t border-[#E2E8F0] shadow-sm z-50">
          <ul className="text-right space-y-2 p-2">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => setOpen(false)}>
                <MyNavLink className="w-full" to={item.path}>
                  {item.icon}
                  {item.name}
                </MyNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
