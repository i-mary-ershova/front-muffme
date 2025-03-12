
'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';
import Login from "../Login";


export default function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleLogin = () => {
        setIsLoginOpen((prev) => !prev);
    };
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logo_img}>
                    <Image src="/icons/logo.svg" alt="logo" fill
                        style={{ objectFit: 'contain' }} />
                </Link>
            
                <nav className={styles.navigation}>
                    <a href="/about">О нас</a>
                    <a href="/order">Как сделать предзаказ</a>
                    <div className={styles.icons}>
                    {/* Кнопка для открытия/закрытия формы */}
                    <button className={styles.loginButton} onClick={toggleLogin}>
                        <Image src="/icons/LK.svg" alt="Личный кабинет" width={30} height={30} />
                    </button>
                        <Link href="/cart">
                            <Image src="/icons/cart.svg" alt="Корзина" width={45} height={30} className={styles.iconsIcons} />
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Виджет входа (показывается только если isLoginOpen === true) */}
            {isLoginOpen && <Login onClose={toggleLogin} />}
        </header>
    );
}