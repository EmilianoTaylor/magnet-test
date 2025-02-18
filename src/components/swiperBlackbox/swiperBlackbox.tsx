// @ts-nocheck
import './swiperBlackbox.css'
import React, { useState, useEffect, useRef } from "react";
// import styles from "./SwipeList.module.css";

const users = [
  { id: 1, name: "msilenkov", company: "Digital Designer", info: "Digital Designer" },
  { id: 2, name: "psmolensky", company: "Digital Designer", info: "Digital Designer" },
  { id: 3, name: "apolyakov", company: "Росатом", info: "ищет помощника" },
  { id: 4, name: "pmakarov", company: "Marketing Adviser", info: "ищет помощника" },
  { id: 5, name: "ichulpanov", company: "PO Yandex Go", info: "ищет помощника" },
  { id: 6, name: "Сергей Кравцов", company: "МФТИ", info: "ищет помощника" },
  { id: 7, name: "Mikhaylo", company: "Chel", info: "ищет помощника" },
  { id: 8, name: "Antony", company: "Betis", info: "Digital Designer" },
  { id: 9, name: "Jackson", company: "Chel", info: "Digital Designer" },
  { id: 10, name: "Pogba", company: "Nope", info: "Digital Designer" },
  { id: 11, name: "Chukwuemeka", company: "Chel", info: "Digital Designer" },
  { id: 12, name: "Wirtz", company: "BOU", info: "" },
];

const SwiperBlackboxList = () => {
  const [startY, setStartY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const listRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;
    if (diffY > 30 && currentIndex < users.length - 6) { // Остановиться на item-6
      setCurrentIndex((prev) => prev + 1);
    } else if (diffY < -30 && currentIndex > 1) { // Остановиться на item-1
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="swiper-container">
			<div className="background-overlay"></div>
      <ul
        className="swiper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={listRef}
      >
        {users.map((user, index) => {
          let className = "hidden";
          // Реализуем логику для отображения элементов 1-7, включая новые сверху и снизу
          if (index === currentIndex - 1) {
            className = "item item-1"; // Скрыть сверху
          } else if (index >= currentIndex && index < currentIndex + 5) {
            className = `item item-${index - currentIndex + 2}`; // Индексация с item-2
          } else if (index === currentIndex + 5) {
            className = "item item-7"; // Скрыть снизу
          }
					
          return (
            <li key={user.id} className={className}>
              <p>{user.name}</p>
              <p>{user.company}</p>
              {index === currentIndex + 2 && <p>{user.info}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwiperBlackboxList;
