const FriendCard = ({ friend }) => {
  return (
    <div className="bg-base-100 shadow-md p-6 rounded-lg space-y-4">
      <figure>
        <img
          src={friend.picture}
          alt={friend.name}
          className="rounded-full w-25 object-cover mx-auto"
        />
      </figure>
      <div className="text-center space-y-3">
        <h2 className="font-semibold text-lg">{friend.name}</h2>
        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="badge bg-[#CBFADB] text-[#244D3F] rounded-full uppercase font-medium text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p
          className={`badge rounded-full capitalize font-medium text-xs text-white ${friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}
        >
          {friend.status}
        </p>
      </div>
    </div>
  );
};

export default FriendCard;
