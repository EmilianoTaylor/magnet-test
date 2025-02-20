import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import { init, miniApp } from '@telegram-apps/sdk';


// const initializeTelegramSDK = async () => {
//   try {
//     await init();
//     if (miniApp.ready.isAvailable()) {
//       await miniApp.ready();
//       console.log('Mini App готово');
//     }
//   } catch (error) {
//     console.error('Ошибка инициализации:', error);
//   }
// };

// initializeTelegramSDK();

// // @ts-ignore
// const tg = window.Telegram?.WebApp;

// if (tg) {
//   tg.ready();
//   tg.expand();
//   tg.MainButton.setText("Продолжить");
//   tg.MainButton.show();
// }


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
