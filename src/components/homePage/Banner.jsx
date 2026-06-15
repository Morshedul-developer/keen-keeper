import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-4 py-10 md:py-20">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="text-[#64748B] max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white hover:bg-[#1F2937]">
        <FiPlus /> Add Friend
      </button>
    </div>
  );
};

export default Banner;
