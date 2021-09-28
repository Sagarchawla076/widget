import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
const FriendList = ({ list }) => {
  const [friends, setFriends] = useState(list);
  const clearList = () => {
    setFriends([]);
  };
  const renderFriends = friends.map((friend) => {
    return <Friend friend={friend} key={friend.id} />;
  });
  return (
    <div className="friends__container">
      <h2> {friends.length} Birthdays Today</h2>
      {renderFriends}
      <Button text="Clear All" clearList={clearList} />
    </div>
  );
};
export default FriendList;
