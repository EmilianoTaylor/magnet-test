import { useState } from 'react'
import './App.css'
import SwiperList from './components/SwiperList/swiperList'
import SwiperBlackboxList from './components/swiperBlackbox/swiperBlackbox'

function App() {

  return (
		<div className='mainDiv'>
			{/* <SwiperList /> */}
			<SwiperBlackboxList />
		</div>
  )
}

export default App
