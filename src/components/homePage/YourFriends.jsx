import FriendCard from "../ui/FriendCard";
import { ClipLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";

const YourFriends = () => {
  const { friends, loading } = useFriends();
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-2xl">Your Friends</h4>
      {loading ? (
        <div className="flex justify-center items-center h-50">
          <ClipLoader color="#25ee26" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourFriends;
