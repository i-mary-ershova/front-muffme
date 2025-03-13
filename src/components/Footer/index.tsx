
'use client';

import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 1️⃣ Логотип */}
        <div className={styles.logoContainer}>
          <Image
            src="/icons/logo.svg" // Замените на путь к вашему логотипу
            alt="Логотип muffme"
            layout="responsive"
            width={200} // Исходная ширина
            height={100} // Исходная высота (авто-скейлинг сохранит пропорции)
          />
        </div>

        {/* 2️⃣ Навигация + Соцсети */}
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li><a href="/about">О нас</a></li>
              <li><a href="/preorder">Как сделать предзаказ</a></li>
              <li><a href="/profile">Личный кабинет</a></li>
            </ul>
          </nav>
          <p>Соцсети:</p>
          <div className={styles.socialIcons}>
            <Image src="/socials/telegram.svg" alt="Telegram" width={30} height={30} />
            <Image src="/socials/insta.svg" alt="Instagram" width={30} height={30} />
            <Image src="/socials/VK.svg" alt="VK" width={30} height={30} />
            <Image src="/socials/tiktok.svg" alt="TikTok" width={30} height={30} />
          </div>
        </div>

        {/* 3️⃣ Навигация + Адрес */}
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li><a href="/custom-muffin">Собрать маффин</a></li>
              <li><a href="/custom-box">Собрать коробку</a></li>
              <li><a href="/author-muffins">Авторские маффины</a></li>
            </ul>
          </nav>
          <div className={styles.address}>
            <Image src="/icons/address.svg" alt="Карта" width={30} height={30} />
            <p>Тюмень, ул. Машарова, 4 ️️</p>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <p className={styles.copyright}>© muffme, 2025</p>
    </footer>
  );
}
