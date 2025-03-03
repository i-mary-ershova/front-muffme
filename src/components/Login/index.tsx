import React, { useState } from 'react';
import './Login.module.scss';

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Вход</h1>
        <input
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={handleInputChange}
          className="login-input"
        />
        <button className="login-button" disabled={!phoneNumber}>
          Получить код
        </button>
        <p className="login-text">У меня еще нет аккаунта</p>
        <a href="/register" className="login-link">Зарегистрироваться</a>
      </div>
    </div>
  );
};

export default Login;
