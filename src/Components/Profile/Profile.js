import "../Profile/Profile.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          width={50}
          height={50}
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats__list">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats__list">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats__list">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
