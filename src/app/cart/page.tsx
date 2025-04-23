// src/app/cart/CartPage.tsx
import React from 'react';
import ChoiceCard from '@/components/ChoiceCard';
import styles from './Cartpage.module.scss'; // Создайте этот файл для стилей

const CartPage = () => {
    const isCartEmpty = true; // Здесь вы можете использовать состояние или контекст для проверки корзины

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.emptyMessage}>
                {isCartEmpty &&  "Тут так пусто... Может возьмешь маффин?"}
            </h1>
            <div className={styles.cardsContainer}>
            {isCartEmpty && <ChoiceCard />}
            </div>
        </div>
    );
};

export default CartPage;