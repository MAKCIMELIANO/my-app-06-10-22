const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span
        className="status"
        style={isOnline ? { color: "green" } : { color: "red" }}
      >
        {isOnline ? "Online" : "NoOnline"}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendList;
