import { useEffect, useState } from "react";
import FriendCard from "../ui/FriendCard";

const YourFriends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        const fetchFriends = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();
            setFriends(data);
        }
        fetchFriends();
    },[])
    return (
        <div className="space-y-4">
            <h4 className="font-bold text-2xl">Your Friends</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default YourFriends;