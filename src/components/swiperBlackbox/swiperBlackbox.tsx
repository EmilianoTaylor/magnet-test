// @ts-nocheck
import './swiperBlackbox.css'
import React, { useState, useEffect, useRef } from "react";
import icon from '../images/userIcon.svg';
import infoIcon from '../images/infoIcon.svg';
import UserIcon from '../UserIcon/userIcon';
import telegramIcon from '../images/telegramIcon.svg';

const users = [
	{ id: 1, name: "msilenkov", company: "Google", info: "Ищет менеджера для реализации крупных задач на проекте" },
	{ id: 2, name: "psmolensky", company: "", info: "Найм людей на долгосрочную работу в команде" },
	{ id: 3, name: "apolyakov", company: "Росатом", info: "Ищет разработчика для создания нового продукта" },
	{ id: 4, name: "pmakarov", company: "Marketing Adviser", info: "Найм дизайнера для создания нового бренда" },
	{ id: 5, name: "ichulpanov", company: "", info: "Найм людей" },
	{ id: 6, name: "Сергей Кравцов", company: "МФТИ", info: "Ищет маркетолога для продвижения нового продукта" },
	{ id: 7, name: "Mikhaylo Mudryk", company: "", info: "Ищет инженера для создания нового продукта" },
	{ id: 8, name: "Antony", company: "Betis", info: "Найм аналитика для анализа данных" },
	{ id: 9, name: "Jackson", company: "Chelsea", info: "Найм консультанта для оптимизации бизнес-процессов" },
	{ id: 10, name: "Paul Pogba", company: "Nope", info: "Ищет менеджера для реализации крупных задач на проекте" },
	{ id: 11, name: "Chukwuemeka", company: "Chelsea", info: "Найм дизайнера для создания нового бренда" },
];

const SwiperBlackboxList = ({ toggleRotateIcon }) => {
  const [startY, setStartY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const listRef = useRef(null);
  const [infoText, setInfoText] = useState(users[currentIndex + 2]?.info || "Нет информации");
  const [fade, setFade] = useState(false);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;
    if (diffY < -30) {
      setCurrentIndex((prev) => (prev + 1) % users.length);
			toggleRotateIcon(-180);
      setTimeout(() => {
        document.querySelector(".item-4").classList.remove("swipe-up");
        document.querySelector(".item-5").classList.add("swipe-up");
      }, 10);
    } else if (diffY > 30) {
      setCurrentIndex((prev) => (prev - 1 + users.length) % users.length);
			toggleRotateIcon(180);
			setTimeout(() => {
        document.querySelector(".item-4").classList.add("swipe-up");
        document.querySelector(".item-5").classList.remove("swipe-up");
      }, 10);
    }
  };

  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setInfoText(users[(currentIndex + 2) % users.length]?.info || "Нет информации");
      setFade(false);
    }, 300);
  }, [currentIndex]);

  return (
    <div className="swiper-container">
      <div className="background-overlay">
        <div className="informationBlock">
          <span className={`userText ${fade ? "fade-out" : "fade-in"}`}>{infoText}</span>
          <img src={infoIcon} className="infoIcon" />
        </div>
        <img src={telegramIcon} className="telegramIcon" />
      </div>
      <ul
        className="swiper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={listRef}
      >
        {users.map((user, index) => {
					let className = "hidden";
					const newIndex = (currentIndex + index - 1) % users.length;
					if (newIndex >= 0 && newIndex < 7) {
						className = `item item-${newIndex + 1}`;
					}

          return (
            <li key={user.id} className={className}>
              <div className="userCard">
                <UserIcon name={user.name} className="userIcon" />
                <div className="userInfo">
                  <span className="userName">{user.name}</span>
                  {user.company && <span className="userCompany">{user.company}</span>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwiperBlackboxList;