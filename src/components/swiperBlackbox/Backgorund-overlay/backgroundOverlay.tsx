import './backgroundOverlay.scss'
import infoIcon from '../../images/infoIcon.svg';
import telegramIcon from '../../images/telegramIcon.svg';
import { BackgroundOverlayProps } from '../../interfaces/swiperListInterfaces';


const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ fade, infoText }) => {

	return (
		<div className="background-overlay">
			<div className="informationBlock">
				<span className={`userText ${fade ? "fade-out" : "fade-in"}`}>{infoText}</span>
				<img src={infoIcon} className="infoIcon" />
			</div>
			<img src={telegramIcon} className="telegramIcon" />
		</div>
	)
}

export default BackgroundOverlay;