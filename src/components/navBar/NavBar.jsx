import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import MyNavLink from "../myNavLink/MyNavLink";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const navItems = [
    { name: "Home", icon: <RiHome2Line size={16} />, path: "/" },
    { name: "Timeline", icon: <RiTimeLine size={16} />, path: "/timeline" },
    { name: "Stats", icon: <TfiStatsUp size={16} />, path: "/stats" },
  ];
  return (
    <nav className="border-b border-[#E2E8F0]">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div>
          <h3 className="text-xl font-bold text-[#1F2937]">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </h3>
        </div>
        <div className="md:hidden">
          <TiThMenu size={20} />
        </div>
        <ul className="gap-4 items-center hidden md:flex">
          {navItems.map((item,index) => (
            <li key={index}>
              <MyNavLink to={item.path}>
                {item.icon}
                {item.name}
              </MyNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
