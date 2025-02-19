import { useEffect, useState } from 'react'
import './App.css'
import SwiperBlackboxList from './components/SwiperBlackbox/swiperBlackbox'
import UserPanel from './components/UserPanel/userPanel'
import FilterPanel from './components/FilterPanel/filterPanel'

//@ts-ignore
const tg = window.Telegram?.WebApp;

function App() {
	const [rotateIcon, setRotateIcon] = useState(0);
	const [user, setUser] = useState({ id: '', first_name: '' });
	//@ts-ignore
	const userName = "Viacheslav"

  const toggleRotateIcon = (direction: number) => {
    setRotateIcon((prev) => prev + direction);
  };

	useEffect(() => {
		// @ts-ignore
    const tg = window.Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
		<div className='mainDiv'>
			<UserPanel name={user.first_name} notifications={3}/>
			<SwiperBlackboxList toggleRotateIcon={toggleRotateIcon} />
      <FilterPanel rotateIcon={rotateIcon} />
		</div>
  )
}

export default App
