// @ts-nocheck

import UserProfileIcon from "../UserProfile/userProfileIcon";
import "./userPanel.css";

const UserPanel = ({ name, notifications }) => {
  return (
    <div className="user-panel">
      <UserProfileIcon name={name} notifications={notifications} />
      <span className="user-name">{name}</span>
    </div>
  );
};

export default UserPanel;