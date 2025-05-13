'use client';

import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children
}: ProtectedRouteProps) {
  // Всегда возвращаем содержимое без проверки авторизации
  return <>{children}</>;
} 