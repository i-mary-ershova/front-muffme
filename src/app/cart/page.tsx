// src/app/cart/CartPage.tsx
'use client';

import { useState } from 'react';
import styles from './Cartpage.module.scss';
import ChoiceCard from '@/components/ChoiceCard';

export default function CartPage() {
  const [isEmpty, setIsEmpty] = useState(true);
  // Здесь позже можно добавить логику для проверки корзины

  return (
    <div className={styles.cartContainer}>
      <div className={styles.container}>
        <h1 className={styles.emptyMessage}>
          {isEmpty ? "Тут так пусто... Может возьмешь маффин?" : "Ваша корзина"}
        </h1>
        
        {isEmpty && (
          <div className={styles.cardsContainer}>
            <ChoiceCard />
          </div>
        )}
        
        {!isEmpty && (
          <div className={styles.cartItemsContainer}>
            {/* Здесь будут отображаться товары в корзине */}
            <p>Товары в корзине</p>
          </div>
        )}
      </div>
    </div>
  );
}