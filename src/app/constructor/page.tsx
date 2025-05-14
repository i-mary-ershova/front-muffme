'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import styles from './Constructor.module.scss';

export default function ConstructorPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/constructor/constructor.png" 
                alt="Превью конструктора маффинов" 
                width={900} 
                height={600} 
                className={styles.previewImage}
                priority
              />
            </div>
            
            <div className={styles.message}>
              <p>
                Так будет выглядеть страница конструктора маффинов при полном деплое. 
                Остальные страницы уже функционируют (mock-backend) и&nbsp;доступны для просмотра.
              </p>
            </div>
            
            <button 
              onClick={handleGoBack} 
              className={styles.backButton}
              type="button"
            >
              Вернуться
            </button>
          </div>
        </div>
      </main>
    </>
  );
}