import { FiPlus } from "react-icons/fi";
import SummaryCard from "../ui/SummaryCard";

const Banner = () => {
  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="text-[#64748B] max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white hover:bg-[#1F2937]">
        <FiPlus /> Add Friend
      </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-16">
        <SummaryCard children1="10" children2="Total Friends" />
        <SummaryCard children1="3" children2="On Track" />
        <SummaryCard children1="6" children2="Need Attention" />
        <SummaryCard children1="12" children2="Interactions This Month" />
      </div>
    </div>
  );
};

export default Banner;
