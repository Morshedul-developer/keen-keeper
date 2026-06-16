import { useState } from "react";
import { FriendsContext } from "./FriendContext";

const FriendsContextProvider = ({ children }) => {
  const [fnd, setFnd] = useState([]);
  const handleClick = (fd, str) => {
    fd.event = str;
    setFnd([...fnd, fd]);
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
