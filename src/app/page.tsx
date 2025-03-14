'use client'

import React from 'react';
import MainHero from '@/components/MainHero';
import DessertSection from '@/components/DessertSection';
import Marquee from '@/components/Marquee';

const App: React.FC = () => {
    return (
        <main>
            <MainHero />
            <Marquee />
            <DessertSection />
        </main>

        /*<div>
            {/* Другие компоненты и контент }
            <div style={{ height: '2000px' }}> {/* Пример контента для прокрутки }
                <h1>Прокрутите страницу вниз!</h1>
            </div>
            {/* <Header />
            <main className="main-content">
                <Login />
                {/* <h1>Cup&apos;n&apos;Crafts</h1>
                <h2>Первая в России кондитерская-конструктор</h2>
                </main> }
            <Marquee />
            <div style={{ height: '2000px' }}> {/* Пример контента для прокрутки }
                <h1>Прокрутите страницу вниз!</h1>
            </div>
        </div>*/
    );
};

export default App;
