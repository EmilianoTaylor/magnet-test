// @ts-nocheck
import './swiperBlackbox.css'



import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface User {
  name: string;
  company: string;
  info: string;
}

const users: User[] = Array(20).fill(null).map((_, index) => ({
  name: `Пользователь ${index + 1}`,
  company: `Компания ${index + 1}`,
  info: `Короткая информация о пользователе ${index + 1}`,
}));

const SwiperBlackboxList = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSwipe = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="swiper-list">
      {users.map((user, index) => (
        <motion.div
          key={index}
          className={`swiper-list-item ${index === activeIndex ? 'active' : ''}`}
          initial={{ opacity: 0, y: index === activeIndex ? 0 : index < activeIndex ? -100 : 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: index < activeIndex ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          drag={true}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragSnapBack={true}
          onDragEnd={(event, info) => {
            if (info.offset.y > 50) {
              handleSwipe('down');
            } else if (info.offset.y < -50) {
              handleSwipe('up');
            }
          }}
        >
          <div className="swiper-list-item-content">
            <h2>{user.name}</h2>
            <p>{user.company}</p>
            {index === activeIndex && (
              <p className="swiper-list-item-info">{user.info}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SwiperBlackboxList;