import Image from 'next/image';
import styles from './ChoiceCard.module.scss';

interface CardData {
  imageSrc: string;
  label: string;
  alt: string;
}

const cardData: CardData[] = [
  {
    imageSrc: '/images/main/construct.png',
    label: 'Конструктор маффинов',
    alt: 'Constructor'
  },
  {
    imageSrc: '/images/main/box.png',
    label: 'Собрать коробку',
    alt: 'Box Builder'
  },
  {
    imageSrc: '/images/main/author.png',
    label: 'Авторские маффины',
    alt: "Author's Muffins"
  }
];

export const ChoiceCard = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className={styles.cardContainer}>
          <div className={styles.card}>
            <Image
              src={card.imageSrc}
              alt={card.alt}
              fill
              style={{ objectFit: 'contain', padding: '10px' }}
              priority
            />
          </div>
          <div className={styles.label}>
            <span>{card.label}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChoiceCard; 