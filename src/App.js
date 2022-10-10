import "./App.css";
import Profile from "./Components/Profile/Profile";
import user from "../src/user.json";
import Statistics from "./Components/Profile/Statistics/Statistics";
import data from "../src/data.json";
import FriendList from "./Components/FriendList/FriendList";
import FriendListConfig from "../src/friend.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <ul key={FriendListConfig.id}>
        {FriendListConfig.map((friends) => (
          <FriendList
            key={friends.id}
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
