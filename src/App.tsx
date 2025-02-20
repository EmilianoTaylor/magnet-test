import { useEffect, useState } from 'react'
import './App.css'
import SwiperBlackboxList from './components/SwiperBlackbox/swiperBlackbox'
import UserPanel from './components/UserPanel/userPanel'
import FilterPanel from './components/FilterPanel/filterPanel'
import SwipeHandler from './components/SwiperHandler/swiperHandler'
import { init, miniApp } from '@telegram-apps/sdk';

const initializeTelegramSDK = async () => {
  try {
    await init();
    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }
  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


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

  useEffect(() => {
    initializeTelegramSDK();
  }, []);

  return (
		<SwipeHandler>
			<div className='mainDiv'>
				<UserPanel name={user.first_name} notifications={3}/>
				<SwiperBlackboxList toggleRotateIcon={toggleRotateIcon} />
				<FilterPanel rotateIcon={rotateIcon} />
			</div>
    </SwipeHandler>

  )
}

export default App
