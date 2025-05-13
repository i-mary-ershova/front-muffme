import Catalog from '@/components/Catalog';
import { api } from '@/utils/api';

// Функция для получения данных продуктов с сервера
async function getProducts() {
  // Вместо этого мока вы бы делали запрос к вашему API
  // const products = await api.getProducts();
  
  // Этот моковый объект имитирует ответ от API
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
  
  return products;
}

// Вместо функционального компонента с директивой 'use client',
// теперь это асинхронная серверная функция
export default async function AuthorMuffinsPage() {
  // Получаем данные на сервере
  const products = await getProducts();
  
  // Передаем данные как проп компоненту Catalog
  return <Catalog products={products} />;
} 