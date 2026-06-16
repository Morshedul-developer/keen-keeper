import { useContext } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimelineCard from "../../components/ui/TimelineCard";

const TimeLine = () => {
  const { fnd, setFnd } = useContext(FriendsContext);
  const handleCall = () => {
    const calledItems = fnd.filter((fd) => fd.event === "call");
    setFnd(calledItems);
  };
  const handleText = () => {
    const calledItems = fnd.filter((fd) => fd.event === "text");
    setFnd(calledItems);
  };
  const handleVideo = () => {
    const calledItems = fnd.filter((fd) => fd.event === "video");
    setFnd(calledItems);
  };
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0">
        <h2 className="text-4xl font-bold">Timeline</h2>
        <select
          defaultValue="Filter timeline"
          className="select appearance-none"
          onChange={(e) => {
            if (e.target.value === "Call") handleCall();
            else if (e.target.value === "Text") handleText();
            else if (e.target.value === "Video") handleVideo();
          }}
        >
          <option disabled={true}>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
        {fnd.map((fd, index) => (
          <TimelineCard key={index} fd={fd} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
