import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { ClipLoader } from "react-spinners";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { PiChatDotsBold, PiPhoneCallBold } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendContext";

const FriendDetails = () => {
  const {fnd, setFnd} = useContext(FriendsContext);
  const { friendId } = useParams();
  const { friends, loading } = useFriends();
  const expectedFriend = friends.find(
    (friend) => String(friend.id) === friendId,
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center h-50">
        <ClipLoader color="#25ee26" />
      </div>
    );
  }
  const handleClick = (fd) => {
    setFnd([...fnd, fd])
  }
  console.log(fnd);
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-12 grid-rows-7 gap-6">
        <div className="col-span-3 row-span-4 shadow-sm rounded-lg p-6 text-center space-y-2">
          <img
            src={expectedFriend?.picture}
            alt={expectedFriend?.name}
            className="w-20 h-auto rounded-full mx-auto object-cover"
          />
          <h2 className="font-semibold text-lg">{expectedFriend?.name}</h2>
          <p
            className={`badge rounded-full capitalize font-medium text-xs text-white ${expectedFriend?.status === "overdue" ? "bg-[#EF4444]" : expectedFriend?.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}
          >
            {expectedFriend?.status}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {expectedFriend?.tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-[#CBFADB] text-[#244D3F] rounded-full uppercase font-medium text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#64748B] italic">
            "{expectedFriend?.bio}"
          </p>
          <p className="text-[12px] text-[#64748B]">{expectedFriend?.email}</p>
        </div>
        <div className="col-span-3 row-span-2 shadow-sm rounded-lg text-center space-y-2 flex flex-col justify-center items-center">
          <strong className="text-3xl">
            {expectedFriend?.days_since_contact}
          </strong>
          <p className="text-[#64748B]">Days Since Contact</p>
        </div>
        <div className="col-span-3 row-span-2 shadow-sm rounded-lg text-center space-y-2 flex flex-col justify-center items-center">
          <strong className="text-3xl">{expectedFriend?.goal}</strong>
          <p className="text-[#64748B]">Goal (Days)</p>
        </div>
        <div className="col-span-3 row-span-2 shadow-sm rounded-lg text-center space-y-2 flex flex-col justify-center items-center">
          <strong className="text-3xl">
            {new Date(expectedFriend?.next_due_date).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              },
            )}
          </strong>
          <p className="text-[#64748B]">Next Due</p>
        </div>
        <div className="col-span-9 row-span-2 shadow-sm rounded-lg p-6 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Relationship Goal</p>
            <button className="btn bg-[#F8FAFC] hover:bg-[#E2E8F0]">
              Edit
            </button>
          </div>
          <p className="text-xl text-[#64748B]">
            Connect every{" "}
            <span className="font-bold text-black">
              {expectedFriend?.goal} days
            </span>
          </p>
        </div>
        <button className="btn col-span-3 h-full row-span-1 text-[16px] bg-[#F8FAFC] hover:bg-[#E2E8F0] gap-2">
          <RiNotificationSnoozeLine size={20} />
          Snooze 2 weeks
        </button>
        <div className="col-span-9 row-span-3 shadow-sm rounded-lg p-6 space-y-4">
          <p className="text-xl font-semibold">Quick Check-In</p>
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleClick(expectedFriend)} className="btn h-32 flex-col bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[16px] gap-2">
              <PiPhoneCallBold size={30} />
              Call
            </button>
            <button className="btn h-32 flex-col bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[16px] gap-2">
              <PiChatDotsBold size={30} />
              Text
            </button>
            <button className="btn h-32 flex-col bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[16px] gap-2">
              <LuVideo size={30} />
              Video
            </button>
          </div>
        </div>
        <button className="btn col-span-3 h-full row-span-1 text-[16px] bg-[#F8FAFC] hover:bg-[#E2E8F0] gap-2">
          <FiArchive size={17} />
          Archive
        </button>
        <button className="btn col-span-3 h-full row-span-1 text-[16px] bg-[#F8FAFC] hover:bg-[#E2E8F0] gap-2">
          <RiDeleteBinLine size={20} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendDetails;
