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
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-4">{expectedFriend.name}</h1>
          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="rounded-full w-32 h-32 object-cover mx-auto"
          />
          <p className="text-lg mt-4">{expectedFriend.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
