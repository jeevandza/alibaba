import { useState } from "react";
import { Button } from "reactstrap";
import personProfile from "../images/personProfile.svg";
import { BsPencilSquare } from "react-icons/bs";

const UserProfile = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="navbar-user">
      <Button
        color="none"
        border="none"
        style={{ backgroundColor: "none" }}
        onClick={() => setIsShown(!isShown)}
        className="navbar-user-container"
      >
        <img width="50" height="50" src={personProfile} alt="personProfile" />
      </Button>
      {isShown && (
        <div className="user-details">
          <div className="user-profile-email">
            <img
              width="30"
              height="30"
              src={personProfile}
              alt="personProfile"
            />
            <BsPencilSquare style={{ marginTop: "10px" }} />
            <div style={{ marginTop: "6px" }}>Email id</div>
          </div>

          <button className="logout">Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
