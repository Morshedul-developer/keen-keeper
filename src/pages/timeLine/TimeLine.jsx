import { useContext, useEffect, useState } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimelineCard from "../../components/ui/TimelineCard";
import { FiInbox } from "react-icons/fi";

const TimeLine = () => {
  const { fnd } = useContext(FriendsContext);
  const [newList, setNewList] = useState(fnd);
  useEffect(() => {
    setNewList(fnd);
  }, [fnd]);
  const handleAll = () => {
    setNewList(fnd);
  };
  const handleCall = () => {
    const calledItems = fnd.filter((fd) => fd.event === "call");
    setNewList(calledItems);
  };
  const handleText = () => {
    const calledItems = fnd.filter((fd) => fd.event === "text");
    setNewList(calledItems);
  };
  const handleVideo = () => {
    const calledItems = fnd.filter((fd) => fd.event === "video");
    setNewList(calledItems);
  };
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0">
        <h2 className="text-4xl font-bold">Timeline</h2>
        <select
          defaultValue="Filter timeline"
          className="select appearance-none"
          onChange={(e) => {
            if (e.target.value === "All Activities") handleAll();
            else if (e.target.value === "Call") handleCall();
            else if (e.target.value === "Text") handleText();
            else if (e.target.value === "Video") handleVideo();
          }}
        >
          <option disabled={true}>Filter timeline</option>
          <option>All Activities</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
        {newList.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-12 text-center">
            <div className="text-5xl mb-4 text-[#244D3F] flex justify-center">
              <FiInbox />
            </div>

            <h2 className="text-3xl font-bold text-[#244D3F] mb-2">
              No Activities Found
            </h2>

            <p className="text-[#64748B]">
              Try selecting a different filter or add a new interaction.
            </p>
          </div>
        ) : (
          newList.map((fd, index) => <TimelineCard key={index} fd={fd} />)
        )}
      </div>
    </div>
  );
};

export default TimeLine;
