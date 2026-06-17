import { useContext, useEffect, useState } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimelineCard from "../../components/ui/TimelineCard";

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
          <h2>There is no data</h2>
        ) : (
          newList.map((fd, index) => <TimelineCard key={index} fd={fd} />)
        )}
      </div>
    </div>
  );
};

export default TimeLine;
