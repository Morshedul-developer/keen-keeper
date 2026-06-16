import { useState } from "react";
import { FriendsContext } from "./FriendContext";

const FriendsContextProvider = ({children}) => {
    const [fnd, setFnd] = useState([]);
    const data = {
        fnd, setFnd
    }
    return (
        <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
    );
};

export default FriendsContextProvider;