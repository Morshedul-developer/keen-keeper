import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-5xl font-bold text-white">
              Keen<span className="font-semibold">Keeper</span>
            </h3>
            <p className="text-white/80 font-light">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-[20px] font-semibold text-white">Social Links</p>
            <ul className="flex gap-4 justify-center">
              <li className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <AiFillInstagram size={20} />
              </li>
              <li className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <FaFacebookSquare size={20} />
              </li>
              <li className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <FaXTwitter size={20} />
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-white/20 my-8" />
        <div className="flex items-center justify-between">
            <p className="text-white/60 font-light">
                &copy; 2024 KeenKeeper. All rights reserved.
            </p>
            <ul className="flex gap-4 flex-wrap text-white/60 font-light">
                <li><a className="hover:underline" href="/">Privacy Policy</a></li>
                <li><a className="hover:underline" href="/">Terms of Service</a></li>
                <li><a className="hover:underline" href="/">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
