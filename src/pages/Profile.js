import { AuthContext } from "../contexts/AuthContext";
import "./Profile.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useContext } from "react";

const Profile = () => {
  const { currentUser } = useContext(AuthContext)

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
