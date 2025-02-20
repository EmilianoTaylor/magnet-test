export interface BackgroundOverlayProps {
  fade: boolean;
  infoText: string;
}

export interface UserProfileIconProps {
	name: string;
	notifications: number
}

export interface UserIconProps {
	name: string;
	className: string;
}

export interface FilterPanelProps {
	rotateIcon: number
}

export interface SwiperBlackboxListProps {
  toggleRotateIcon: (direction: number) => void;
}