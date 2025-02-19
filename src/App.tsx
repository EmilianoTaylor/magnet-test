import { useState } from 'react'
import './App.css'
import SwiperList from './components/SwiperList/swiperList'
import SwiperBlackboxList from './components/SwiperBlackbox/swiperBlackbox'
import UserPanel from './components/UserPanel/userPanel'
import FilterPanel from './components/FilterPanel/filterPanel'

function App() {
	const [rotateIcon, setRotateIcon] = useState(0);
	const userName = "Viacheslav"

  const toggleRotateIcon = (direction: number) => {
    setRotateIcon((prev) => prev + direction); // Увеличиваем угол на 180 или -180
  };

  return (
		<div className='mainDiv'>
			{/* <SwiperList /> */}
			<UserPanel name={userName} notifications={2}/>
			<SwiperBlackboxList toggleRotateIcon={toggleRotateIcon} />
      <FilterPanel rotateIcon={rotateIcon} />
		</div>
  )
}

export default App
