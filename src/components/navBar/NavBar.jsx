import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-[#E5E7EB] shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div>
          <h3 className="text-xl font-bold text-[#1F2937]">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </h3>
        </div>
        <ul className="flex gap-4">
          <li className="text-[#1F2937] hover:text-[#244D3F] cursor-pointer">
            <NavLink className="flex items-center gap-1" to="/">
              <RiHome2Line />
              Home
            </NavLink>
          </li>
          <li className="text-[#1F2937] hover:text-[#244D3F] cursor-pointer flex items-center gap-1">
            <NavLink className="flex items-center gap-1" to="/timeline">
              <RiTimeLine />
              Timeline
            </NavLink>
          </li>
          <li className="text-[#1F2937] hover:text-[#244D3F] cursor-pointer flex items-center gap-1">
            <NavLink className="flex items-center gap-1" to="/stats">
              <TfiStatsUp />
              Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
