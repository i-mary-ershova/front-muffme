'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import styles from './Profile.module.scss';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  // Фиктивные данные профиля пользователя
  const mockUserProfile = {
    name: 'Вильгельмина',
    phoneNumber: '+79123456789',
    bonusInfo: {
      currentAmount: 250
    }
  };

  // Тестовые данные истории заказов
  const ordersHistory = [
    { id: 1234, date: '15.02.2025', amount: 850, status: 'Получен', items: 3 },
    { id: 1456, date: '10.04.2025', amount: 1200, status: 'Получен', items: 2 },
    { id: 1789, date: '23.05.2025', amount: 950, status: 'Готовится', items: 4 },
  ];

  const formatPhoneDisplay = (phone: string): string => {
    // Проверяем, что телефон имеет правильный формат
    if (phone.startsWith('+7') && phone.length === 12) {
      const part1 = phone.slice(2, 5);
      const part2 = phone.slice(5, 8);
      const part3 = phone.slice(8, 10);
      const part4 = phone.slice(10, 12);
      return `+7 (${part1}) ${part2} ${part3} ${part4}`;
    }
    // Если телефон не соответствует формату, возвращаем как есть
    return phone;
  };

  const handleLogout = () => {
    // Просто перенаправляем на главную страницу при выходе
    router.replace('/');
  };

  // Рендерим страницу профиля без проверки авторизации
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Личный кабинет</h1>
          
          <div className={styles.content}>
            <div className={styles.profileSection}>
              <h2 className={styles.subtitle}>Ваш профиль</h2>
              <div className={styles.profileData}>
                <p><strong>Имя:</strong> {mockUserProfile.name}</p>
                <p><strong>Телефон:</strong> {formatPhoneDisplay(mockUserProfile.phoneNumber)}</p>
              </div>
              
              <div className={styles.bonusInfo}>
                <h3>Ваши бонусы</h3>
                <div className={styles.bonusAmount}>
                  {mockUserProfile.bonusInfo.currentAmount} баллов
                </div>
              </div>
              
              <button onClick={handleLogout} className={styles.logoutButton}>
                Выйти
              </button>
            </div>
            
            <div className={styles.ordersSection}>
              <h2 className={styles.subtitle}>История заказов</h2>
              <div className={styles.historyList}>
                {ordersHistory.length > 0 ? (
                  ordersHistory.map(order => (
                    <div key={order.id} className={styles.historyItem}>
                      <div className={styles.orderHeader}>
                        <div className={styles.historyDate}>{order.date}</div>
                        <div className={styles.orderStatus}>{order.status}</div>
                      </div>
                      <div className={styles.orderDetails}>
                        <div className={styles.historyDescription}>Заказ #{order.id}</div>
                        <div className={styles.orderItems}>{order.items} товара</div>
                        <div className={styles.historyAmount}>{order.amount} ₽</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.emptyHistory}>
                    У вас пока нет заказов
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 