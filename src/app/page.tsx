// src/App.tsx
'use client'

import React from 'react';
//import Header from '@/components/Header/index';
//import Login from '@/components/Login/index';
import Marquee from '@/components/Marquee/index';
//import '@/styles/index.scss';

const App: React.FC = () => {
    return (
        // <div>
        //     <Header />
        //     <Login />
        // </div>

        <div className="app">
            
            {/* Другие компоненты и контент */}
            <div style={{ height: '2000px' }}> {/* Пример контента для прокрутки */}
                <h1>Прокрутите страницу вниз!</h1>
            </div>
            {/* <Header />
            <main className="main-content">
                <Login />
                {/* <h1>Cup&apos;n&apos;Crafts</h1>
                <h2>Первая в России кондитерская-конструктор</h2>
                </main> */}
            <Marquee />
            <div style={{ height: '2000px' }}> {/* Пример контента для прокрутки */}
                <h1>Прокрутите страницу вниз!</h1>
            </div>
        </div>
    );
};

export default App;
