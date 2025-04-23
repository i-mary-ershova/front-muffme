import Image from 'next/image';
import Link from 'next/link';
import styles from './ChoiceCard.module.scss';

interface CardData {
  imageSrc: string;
  label: string;
  href?: string;
  alt: string;
}

const cardData: CardData[] = [
  {
    imageSrc: '/images/main/construct.png',
    label: 'Собрать маффин',
    alt: ''
  },
  {
    imageSrc: '/images/main/author.png',
    label: 'Авторские рецепты',
    alt: "",
    href: '/author-muffins'
  }
];

export const ChoiceCard = () => {
  return (
    <>
      {cardData.map((card, index) => {
        const CardContent = (
          <div className={styles.card}>
            <Image
              src={card.imageSrc}
              alt={card.alt}
              fill
              style={{ objectFit: 'contain', padding: '10px' }}
              priority
            />
          </div>
        );

        return (
          <div key={index} className={styles.cardContainer}>
            {card.href ? (
              <Link href={card.href} style={{ textDecoration: 'none' }}>
                {CardContent}
              </Link>
            ) : (
              CardContent
            )}
            <div className={styles.label}>
              <span>{card.label}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChoiceCard; 