import { useContext } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimelineCard from "../../components/ui/TimelineCard";

const TimeLine = () => {
  const { fnd } = useContext(FriendsContext);
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold">Timeline</h2>
        <select defaultValue="Pick a color" className="select appearance-none">
          <option disabled={true}>Filter timeline</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        {fnd.map((fd) => (
          <TimelineCard key={fd.id} fd={fd}/>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
