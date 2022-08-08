import { useAuth } from "../contexts/AuthContextProvider";
import "./Profile.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Profile = () => {
  const { currentUser } = useAuth()

  return (
    <div className="profilContainer">
      <div>
        <AccountCircleRoundedIcon className="profileIcon" />
        <p>User Name : {currentUser?.displayName}</p>
        <p>User Email: {currentUser?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
