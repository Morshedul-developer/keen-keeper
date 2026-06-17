import { useState } from "react";
import { FriendsContext } from "./FriendContext";
import { toast } from "react-toastify";

const FriendsContextProvider = ({ children }) => {
  const [fnd, setFnd] = useState([]);
  const handleClick = (fd, str) => {
    const newEntry = {
      ...fd,
      event: str,
    };

    setFnd([...fnd, newEntry]);
    if (str === "call") {
      toast.success(`Call with ${fd.name}`);
    }
    if (str === "text") {
      toast.success(`Text with ${fd.name}`);
    }
    if (str === "video") {
      toast.success(`Video with ${fd.name}`);
    }
  };
  const data = {
    fnd,
    setFnd,
    handleClick,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
