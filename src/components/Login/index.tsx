import React, { useState } from "react";
import styles from "./Login.module.scss";

interface LoginProps {
  onClose: () => void; // Функция для закрытия виджета
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState(""); // Храним код
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [codeSent, setCodeSent] = useState(false); // Показывать ли поле ввода кода

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };

  const handleRequestCode = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:3001/auth/request-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при запросе кода");
      }

      const data = await response.json();
      console.log("Код отправлен:", data);

      setSuccess(true);
      setCodeSent(true); // Показываем поле ввода кода
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
        body: JSON.stringify({ phoneNumber, code: verificationCode }), // Отправляем и код, и телефон
      });

      if (!response.ok) {
        throw new Error("Ошибка верификации кода");
      }

      const data = await response.json();
      console.log("Верификация успешна:", data);

      setSuccess(true);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h1 className={styles.title}>Вход</h1>

        {/* Ввод номера телефона */}
        {!codeSent && 
        <input
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={styles.input}
        />
        }

        {/* Поле ввода кода показываем только если код отправлен */}
        {codeSent && 
        <input
            type="text"
            placeholder="Введите код"
            value={verificationCode}
            onChange={handleCodeChange}
            className={styles.input}
          />
        }

        {/* Кнопка "Получить код" */}
        {!codeSent && (
          <button className={styles.button} disabled={!phoneNumber || loading} onClick={handleRequestCode}>
            {loading ? "Отправка..." : "Получить код"}
          </button>
        )}

        {/* Кнопка "Войти", доступна только если код отправлен */}
        {codeSent && (
          <button className={styles.button} disabled={!verificationCode || loading} onClick={handleVerifyCode}>
            {loading ? "Проверка..." : "Войти"}
          </button>
        )}

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Успешно!</p>}

        <p className={styles.text}>У меня еще нет аккаунта</p>
        <a href="/register" className={styles.link}>Зарегистрироваться</a>
      </div>
    </div>
  );
};

export default Login;
