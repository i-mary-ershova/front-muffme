'use client';

import Image from 'next/image';
import styles from './MainHero.module.scss';
import { ReactNode } from 'react';

interface MainHeroProps {
  children: ReactNode;
}

export const MainHero = ({ children }: MainHeroProps) => {
  return (
    <div className={styles.pageBackground}>
      <section className={styles.hero}>
        <div className={styles.backgroundRect}></div>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <Image
              src="/images/main/muffme_main.svg"
              alt="MuffMe Logo"
              width={700}
              height={280}
              className={styles.logo}
              priority
            />
            <h1 className={styles.slogan}>
              Первая маффинная в&nbsp;России
            </h1>
            <div className={styles.tagline}>
              Пекарня, где ты сам создаёшь свой идеальный десерт
            </div>
            <div className={styles.arrowContainer}>
              <Image 
                src="/icons/arrow.svg"
                alt="Стрелка"
                width={217}
                height={89}
                className={styles.arrow}
              />
            </div>
          </div>
          <div className={styles.rightContent}>
            <Image
              src="/images/main/main.png"
              //src="/images/main/tower.png"
              alt="Main Illustration"
              width={400}
              height={400}
              className={styles.mainImage}
              priority
            />
            <button className={styles.createButton}>
              Собери свой маффин!
            </button>
          </div>
        </div>
        
        {children}
      </section>
    </div>
  );
};

export default MainHero; 