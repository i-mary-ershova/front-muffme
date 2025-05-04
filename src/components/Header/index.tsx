'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { parsePhoneNumberFromString } from "libphonenumber-js";

import styles from './Header.module.scss';
import Login from "../Login";

export default function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    
    // Перенесенные состояния из компонента Login
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formattedPhone, setFormattedPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [verificationCode, setVerificationCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [codeSent, setCodeSent] = useState(false);
    const [codeVerified, setCodeVerified] = useState(false);

    // Сбрасываем верификацию кода при закрытии виджета, если пользователь уже авторизован
    useEffect(() => {
        if (!isLoginOpen && codeVerified) {
            // Сбрасываем только те состояния, которые должны быть сброшены
            // при успешной авторизации
            setVerificationCode("");
            setError(null);
            setSuccess(false);
        }
    }, [isLoginOpen, codeVerified]);

    const toggleLogin = (e?: React.MouseEvent) => {
        // Предотвращаем всплытие события, чтобы избежать немедленного закрытия
        // виджета при клике на кнопку
        if (e) {
            e.stopPropagation();
        }
        setIsLoginOpen(prev => !prev);
    };

    // Обработчики для управления состоянием логина
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setPhoneNumber(input);

        const digitsOnly = input.replace(/\D/g, "");
        const phone = parsePhoneNumberFromString(digitsOnly, "RU");

        if (phone?.isValid()) {
            setError(null);
            setFormattedPhone(phone.number);
        } else {
            setFormattedPhone("");
        }
    };

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '').slice(0, 4);
        setVerificationCode(value);
    };

    const handleRequestCode = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (!formattedPhone || formattedPhone.length !== 12) {
            setError("Введите полный номер телефона");
            setLoading(false);
            return;
        }

        console.log("Отправляем номер:", formattedPhone);

        try {
            const response = await fetch("http://localhost:3001/auth/request-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: formattedPhone }),
            });

            if (!response.ok) {
                throw new Error("Ошибка при запросе кода");
            }

            const data = await response.json();
            console.log("Код отправлен:", data);

            setSuccess(true);
            setCodeSent(true);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("http://localhost:3001/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: formattedPhone, code: verificationCode }),
            });

            if (!response.ok) {
                throw new Error("Ошибка верификации кода");
            }

            const data = await response.json();
            console.log("Верификация успешна:", data);

            setSuccess(true);
            setCodeVerified(true);
            
            // Закрываем виджет после успешной авторизации через некоторое время
            setTimeout(() => {
                setIsLoginOpen(false);
                // Временно закомментирован переход на страницу профиля
                // window.location.href = '/profile';
            }, 2000);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    // Функция сброса состояния логина (если потребуется)
    const resetLoginState = () => {
        setPhoneNumber("");
        setFormattedPhone("");
        setError(null);
        setVerificationCode("");
        setLoading(false);
        setSuccess(false);
        setCodeSent(false);
        setCodeVerified(false);
    };

    // Функция форматирования телефона для отображения
    const formatPhoneDisplay = (phone: string): string => {
        const part1 = phone.slice(2, 5);
        const part2 = phone.slice(5, 8);
        const part3 = phone.slice(8, 10);
        const part4 = phone.slice(10, 12);
        return `+7 (${part1}) ${part2} ${part3} ${part4}`;
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo_img}>
                        <Image src="/icons/logo.svg" alt="logo" fill
                            style={{ objectFit: 'contain' }} />
                    </Link>
                
                    <nav className={styles.navigation}>
                        <Link href="/about">О нас</Link>
                        <Link href="/preorder">Как сделать предзаказ</Link>
                        <div className={styles.icons}>
                        {/* Кнопка для открытия/закрытия формы или перехода в профиль */}
                        {codeVerified ? (
                            <Link href="/profile" className={styles.loginButton}>
                                <Image 
                                    src="/icons/LK-verified.svg" 
                                    alt="Личный кабинет" 
                                    width={30} 
                                    height={30} 
                                    className={styles.iconsIcons} 
                                />
                            </Link>
                        ) : (
                            <button 
                                className={styles.loginButton} 
                                onClick={toggleLogin}
                            >
                                <Image 
                                    src="/icons/LK.svg" 
                                    alt="Личный кабинет" 
                                    width={30} 
                                    height={30} 
                                    className={styles.iconsIcons} 
                                />
                            </button>
                        )}
                            <Link href="/cart">
                                <Image src="/icons/cart.svg" alt="Корзина" width={30} height={30} className={styles.iconsIcons} />
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Передаем все состояния и обработчики в компонент Login */}
            {isLoginOpen && (
                <Login 
                    onClose={toggleLogin} 
                    phoneNumber={phoneNumber}
                    formattedPhone={formattedPhone}
                    error={error}
                    verificationCode={verificationCode}
                    loading={loading}
                    success={success}
                    codeSent={codeSent}
                    codeVerified={codeVerified}
                    onPhoneChange={handlePhoneChange}
                    onCodeChange={handleCodeChange}
                    onRequestCode={handleRequestCode}
                    onVerifyCode={handleVerifyCode}
                    onResetCodeSent={() => setCodeSent(false)}
                    formatPhoneDisplay={formatPhoneDisplay}
                />
            )}
        </>
    );
}