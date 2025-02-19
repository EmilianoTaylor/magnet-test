import { useState } from 'react'
import './App.css'
import SwiperBlackboxList from './components/SwiperBlackbox/swiperBlackbox'
import UserPanel from './components/UserPanel/userPanel'
import FilterPanel from './components/FilterPanel/filterPanel'

function App() {
	const [rotateIcon, setRotateIcon] = useState(0);
	const userName = "Viacheslav"

  const toggleRotateIcon = (direction: number) => {
    setRotateIcon((prev) => prev + direction);
  };

  return (
		<div className='mainDiv'>
			<UserPanel name={userName} notifications={2}/>
			<SwiperBlackboxList toggleRotateIcon={toggleRotateIcon} />
      <FilterPanel rotateIcon={rotateIcon} />
		</div>
  )
}

export default App
