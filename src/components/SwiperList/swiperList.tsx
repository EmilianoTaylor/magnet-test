// @ts-nocheck
import './swiperBlackbox.css'
import React, { useState, useEffect, useRef } from "react";
// import styles from "./SwipeList.module.css";

const users = [
  { id: 1, name: "msilenkov", company: "Digital Designer", info: "Digital Designer" },
  { id: 2, name: "psmolensky", company: "Digital Designer", info: "ищет помощника" },
  { id: 3, name: "apolyakov", company: "Росатом", info: "ищет помощника" },
  { id: 4, name: "pmakarov", company: "Marketing Adviser", info: "ищет помощника" },
  { id: 5, name: "ichulpanov", company: "PO Yandex Go", info: "ищет помощника" },
  { id: 6, name: "Сергей Кравцов", company: "МФТИ", info: "ищет помощника" },
  { id: 7, name: "Mikhaylo", company: "Chel", info: "ищет помощника" },
  { id: 8, name: "Antony", company: "Betis", info: "Digital Designer" },
  { id: 9, name: "Jackson", company: "Chel", info: "Digital Designer" },
  { id: 10, name: "Pogba", company: "Nope", info: "Digital Designer" },
  { id: 11, name: "Chukwuemeka", company: "Chel", info: "" },
  { id: 12, name: "Wirtz", company: "BOU", info: "" },
];

const SwiperBlackboxList = () => {
  const [startY, setStartY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
	const [swipeDirection, setSwipeDirection] = useState("");
  const listRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
		const endY = e.changedTouches[0].clientY;
		const diffY = startY - endY;
		
		if (diffY > 30 && currentIndex < users.length - 5) {
			setSwipeDirection("swipe-up");
			setCurrentIndex((prev) => prev + 1);
		} else if (diffY < -30 && currentIndex > 0) {
			setSwipeDirection("swipe-down");
			setCurrentIndex((prev) => prev - 1);
		}
	
		setTimeout(() => setSwipeDirection(""), 0); // Убираем класс после анимации
	};

  return (
    <div className="swiper-container">
      <div className="background-overlay"></div> {/* Статичный серый фон */}
      <ul
        className={`swiper ${swipeDirection}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={listRef}
      >
        {users.map((user, index) => {
          let className = "hidden";
          if (index >= currentIndex && index < currentIndex + 5) {
            className = `item item-${index - currentIndex + 1}`;
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