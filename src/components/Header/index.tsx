
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className={`container ${styles.wrapper}`}>
                <Link href="/" className={styles.logo_img}>
                    <Image src="/images/logo.svg" alt="logo" fill
                        style={{ objectFit: 'contain' }} />
                </Link>
            {/* <div className="logo">
                <Image fill src="/images/01.png"
                alt="Logo"
                width={50} height={50} />
            </div> */}
            
                <nav className="navigation">
                    <a href="/about">О нас</a>
                    <a href="/order">Как сделать предзаказ</a>
                    <a href="/account" className="account-icon">👤</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
