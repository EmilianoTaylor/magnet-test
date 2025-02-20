import { UserProfileIconProps } from "../interfaces/swiperListInterfaces";
import "./userProfileIcon.scss";

const UserProfileIcon: React.FC<UserProfileIconProps> = ({ name, notifications = 0 }) => {
	const getInitials = (name: string) => {
		if (!name) return "?";
		const words = name.trim().split(" ");
		return words.length === 1
			? words[0][0].toUpperCase()
			: (words[0][0] + words[1][0]).toUpperCase();
	};

	return (
		<div className="user-icon-container">
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="42" height="42" rx="14" fill="#555555" />
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					fill="white"
					fontSize="16"
					fontWeight="bold"
					fillOpacity="0.8"
					fontFamily="Arial, sans-serif"
				>
					{getInitials(name)}
				</text>
			</svg>
			{notifications > 0 && (
				<div className="notification-badge">
				<span className="notification-text">{notifications}</span>
			</div>
			)}
		</div>
	);
};

export default UserProfileIcon;