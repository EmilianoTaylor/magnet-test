// @ts-nocheck
// import './swiperList.css'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./SwiperList.module.css";



type User = {
  name: string;
  company: string;
  info: string;
};

const users: User[] = [
  { name: 'John Doe', company: 'Acme Corp', info: 'Software Engineer' },
  { name: 'Jane Smith', company: 'Techies Inc', info: 'Project Manager' },
  { name: 'Michael Lee', company: 'Innovative Solutions', info: 'Designer' },
  { name: 'Emily Johnson', company: 'DevCo', info: 'Product Manager' },
  { name: 'David Williams', company: 'GlobalTech', info: 'CTO' },
  { name: 'Sarah Brown', company: 'StartupX', info: 'CEO' },
  { name: 'Chris Davis', company: 'WebWorks', info: 'Lead Developer' },
  { name: 'Alex Green', company: 'CloudTech', info: 'UX/UI Designer' },
  { name: 'Emma White', company: 'DigitalWorks', info: 'Marketing Manager' },
  { name: 'Joshua Adams', company: 'CodeMasters', info: 'Software Architect' },
  { name: 'Olivia Martin', company: 'CodeBase', info: 'Full Stack Developer' },
  { name: 'Sophia Clark', company: 'FastTech', info: 'HR Manager' },
  { name: 'James Rodriguez', company: 'DataCraft', info: 'Data Analyst' },
  { name: 'Benjamin Wilson', company: 'AI Systems', info: 'Machine Learning Expert' },
  { name: 'Charlotte Davis', company: 'Tech Enterprises', info: 'Operations Manager' },
  { name: 'Mia Thomas', company: 'WebGenius', info: 'Frontend Developer' },
  { name: 'Liam Martinez', company: 'DevSolutions', info: 'Software Engineer' },
  { name: 'Ethan Jackson', company: 'MobileApp Co.', info: 'Mobile Developer' },
  { name: 'Amelia Moore', company: 'CyberPro', info: 'Security Specialist' },
];

const SwiperList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2); // Изначально активен 3-й элемент

  return (
    <div className={styles["swiper-container"]}>
      <Swiper
        direction="vertical"
        slidesPerView={5}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        className={styles.swiper}
        onSlideChange={() => setActiveIndex(null)} // Во время свайпа сбрасываем active
        onSlideChangeTransitionEnd={(swiper) => setActiveIndex(swiper.activeIndex + 2)} // После завершения свайпа вычисляем новый active
      >
        {users.map((user, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide
              key={index}
              className={isActive ? styles["active-slide"] : styles["swiper-slide"]}
            >
              <div>
                <p>{user.name}</p>
                <p>{user.company}</p>
                {isActive && <p>{user.info}</p>} {/* Показываем info только в активном */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperList;