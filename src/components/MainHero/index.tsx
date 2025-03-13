import Image from 'next/image';
import styles from './MainHero.module.scss';
import ChoiceCard from '../ChoiceCard';

export const MainHero = () => {
  return (
    <div className={styles.pageBackground}>
      <section className={styles.hero}>
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
              первая маффинная в России
            </h1>
          </div>
          <Image
            src="/images/main/main.png"
            alt="Main Illustration"
            width={400}
            height={400}
            className={styles.mainImage}
            priority
          />
        </div>


        
        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
            <Image
              src="/images/main/promo.png"
              alt="Promotional Banner"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* <div className={styles.cardsSection}>
          <ChoiceCard />
        </div> */}
      </section>
    </div>
  );
};

export default MainHero; 