import { UserProfileIconProps } from "../interfaces/swiperListInterfaces";
import UserProfileIcon from "../UserProfile/userProfileIcon";
import "./userPanel.scss";

const UserPanel: React.FC<UserProfileIconProps> = ({ name, notifications }) => {
  return (
    <div className="user-panel">
      <UserProfileIcon name={name} notifications={notifications} />
      <span className="user-name">{name}</span>
    </div>
  );
};

export default UserPanel;