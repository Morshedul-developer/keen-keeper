import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { ClipLoader } from "react-spinners";

const FriendDetails = () => {
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
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-12 grid-rows-7 gap-6">
        <div className="col-span-3 row-span-4 border p-6">
          <img src={expectedFriend?.picture} alt={expectedFriend?.name} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3 row-span-2 border p-5"></div>
        <div className="col-span-3 row-span-2 border p-5"></div>
        <div className="col-span-3 row-span-2 border p-5"></div>
        <div className="col-span-9 row-span-2 border p-5"></div>
        <div className="col-span-3 row-span-1 border p-5"></div>
        <div className="col-span-9 row-span-3 border p-5"></div>
        <div className="col-span-3 row-span-1 border p-5"></div>
        <div className="col-span-3 row-span-1 border p-5"></div>
      </div>
    </div>
  );
};

export default FriendDetails;
