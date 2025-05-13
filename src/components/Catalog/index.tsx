import styles from './Catalog.module.scss';
import ProductCard from '../ProductCard';

// Sample data - replace with real data later
const products = [
  {
    id: 1,
    imageSrc: '/images/author/chok.png',
    title: 'Шоколадный бархат',
    price: 299
  },
  {
    id: 2,
    imageSrc: '/images/author/klubnika.png',
    title: 'Клубничный тарт',
    price: 349
  },
  {
    id: 3,
    imageSrc: '/images/author/salt.png',
    title: 'Солёная карамель',
    price: 299
  },
  {
    id: 4,
    imageSrc: '/images/author/vanil.png',
    title: 'Сливочная ваниль',
    price: 259
  },
  {
    id: 5,
    imageSrc: '/images/author/citrus.png',
    title: 'Цитрусовый сад',
    price: 299
  },
  {
    id: 6,
    imageSrc: '/images/author/tiramisu.png',
    title: 'Тирамису',
    price: 269
  },
  {
    id: 7,
    imageSrc: '/images/author/lavanda.png',
    title: 'Медовая лаванда',
    price: 299
  },
  {
    id: 8,
    imageSrc: '/images/author/apple.png',
    title: 'Карамельное яблоко',
    price: 319
  },
  {
    id: 9,
    imageSrc: '/images/author/orange.png',
    title: 'Апельсин и трюфель',
    price: 269
  },
  {
    id: 10,
    imageSrc: '/images/author/banan.png',
    title: 'Банановый брауни',
    price: 299
  },
  {
    id: 11,
    imageSrc: '/images/author/myata.png',
    title: 'Мятный шоколад',
    price: 319
  },
  {
    id: 12,
    imageSrc: '/images/author/pina.png',
    title: 'Пина колада',
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
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
