import React from 'react';

export const metadata = {
  title: 'Конструктор маффинов | MuffMe',
  description: 'Страница конструктора маффинов MuffMe - создайте свой идеальный десерт'
};

export default function ConstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  );
} 