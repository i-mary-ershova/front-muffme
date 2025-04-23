import styles from './Catalog.module.scss';
import ProductCard from '../ProductCard';

// Sample data - replace with real data later
const products = [
  {
    id: 1,
    imageSrc: '/images/author/choco.png',
    title: 'Шоколадный бархат',
    price: 299
  },
  {
    id: 2,
    imageSrc: '/images/author/2.png',
    title: 'Ягодная мечта',
    price: 299
  },
  {
    id: 3,
    imageSrc: '/images/author/3.png',
    title: 'Карамельное облако',
    price: 299
  },
  {
    id: 4,
    imageSrc: '/images/author/4.png',
    title: 'Ванильное небо',
    price: 299
  },
  {
    id: 5,
    imageSrc: '/images/author/5.png',
    title: 'Лимонная свежесть',
    price: 299
  },
  {
    id: 6,
    imageSrc: '/images/author/6.png',
    title: 'Кофейная мечта',
    price: 299
  },
  {
    id: 7,
    imageSrc: '/images/author/7.png',
    title: 'Фисташковый восторг',
    price: 299
  },
  {
    id: 8,
    imageSrc: '/images/author/8.png',
    title: 'Вишнёвое очарование',
    price: 299
  }
];

export const Catalog = () => {
  const handleAddToCart = (productId: number) => {
    // Handle adding to cart
    console.log(`Adding product ${productId} to cart`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Авторские маффины</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog; 

