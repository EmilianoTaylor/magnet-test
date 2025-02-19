// @ts-nocheck 
import './filterPanel.css'
import searchIcon from '../images/searchIcon.svg'

const FilterPanel = ({ rotateIcon }) => {


	return (
		<div className="filterCard">
			<img 
				src={searchIcon} 
				className="filterIcon" 
				style={{ transform: `rotate(${rotateIcon}deg)`, transition: 'transform 0.3s ease' }} 
			/>
			<div className="filterInfo">
				<span className="searchWord">я ищу</span>
				<span className="searchUser">дизайнера</span>
			</div>
		</div>
	)
}

export default FilterPanel; 