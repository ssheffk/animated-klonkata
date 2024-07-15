import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: 'къща за гости',
    src: 'klonkata.png',
  },
  {
    title: 'рутина',
    src: 'section-3.jpg',
  },
  {
    title: 'клонката',
    src: 'section-4.jpg',
  },
  {
    title: 'гората',
    src: 'section-5.jpg',
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const didAnimate = useRef(false);
  useLayoutEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: 'top-=100px',
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            Троянският балкан, сгушен в сърцето на Средна Стара планина, е рай
            за любителите на природата, предлагащ безброй възможности.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Независимо дали търсите вълнуващо приключение сред високите върхове
            или спокоен ден, прекаран край бреговете на язовира, Къща за гости
            &quot;Клонката&quot; служи като идеална база за опознаване на
            очарователния Троянски балкан и неговите безброй чудеса. Със своята
            живописна обстановка, приятелско отношение и разнообразни дейности,
            този възхитителен имот гарантира незабравимо преживяване за всички,
            които имат късмета да го посетят. .
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
