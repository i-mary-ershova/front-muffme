'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Profile.module.scss';

export default function ProfilePage() {
  const router = useRouter();
  
  // Тестовые данные пользователя
  const userData = {
    name: 'Дарья',
    phone: '+7 (903) 123 45 67',
    birthDate: '12.05.1990',
    points: 350
  };
  
  // Функция выхода из аккаунта
  const handleLogout = () => {
    // Здесь будет логика выхода из аккаунта
    console.log('Выход из аккаунта');
    router.push('/');
  };
  
  // Навигация по разделам профиля
  const navigateToPointsHistory = () => {
    router.push('/profile/points-history');
  };
  
  const navigateToOrdersHistory = () => {
    router.push('/profile/orders-history');
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.name}>{userData.name}</h1>
        
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Телефон</span>
              <input 
                type="text" 
                className={styles.infoInput} 
                value={userData.phone} 
                readOnly
              />
            </div>
            
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Дата рождения</span>
              <input 
                type="text" 
                className={styles.infoInput} 
                value={userData.birthDate} 
                readOnly
              />
            </div>
            
            <button className={styles.logoutButton} onClick={handleLogout}>
              Выйти из аккаунта
            </button>
          </div>
          
          <div className={styles.pointsSection}>
          <span className={styles.pointsLabel}>У вас на счёте</span>
            <div className={styles.pointsBox}>
              <div className={styles.pointsAmount}>
                {userData.points}
                <div className={styles.cherryIcon}>
                  <Image src="/icons/cherry.svg" alt="вишенок" width={50} height={50} />
                </div>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <button className={styles.button} onClick={navigateToPointsHistory}>
                История начислений
              </button>
              <button className={styles.button} onClick={navigateToOrdersHistory}>
                История заказов
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 