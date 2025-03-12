import React, { useState } from "react";
import styles from "./Login.module.scss";

interface LoginProps {
  onClose: () => void; // Функция для закрытия виджета
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        {/* <button className={styles.closeButton} onClick={onClose}>×</button> */}
        <h1 className={styles.title}>Вход</h1>
        <input
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button className={styles.button} disabled={!phoneNumber}>
          Получить код
        </button>
        <p className={styles.text}>У меня еще нет аккаунта</p>
        <a href="/register" className={styles.link}>Зарегистрироваться</a>
      </div>
    </div>
  );
};

export default Login;
