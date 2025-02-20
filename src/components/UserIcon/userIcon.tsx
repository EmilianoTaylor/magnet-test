import { UserIconProps } from "../interfaces/swiperListInterfaces";

const UserIcon: React.FC<UserIconProps> = ({ name, className }) => {
  const getInitials = (name: string) => {
    if (!name) return "?";
    
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0][0].toUpperCase();
    } else {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  };

  return (
    <svg className={className} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="18" fill="#555555" />
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
  );
};

export default UserIcon;