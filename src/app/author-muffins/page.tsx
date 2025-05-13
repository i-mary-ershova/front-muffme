import Catalog from '@/components/Catalog';
import { api } from '@/utils/api';

// Вместо функционального компонента с директивой 'use client',
// теперь это асинхронная серверная функция
export default function AuthorMuffinsPage() {

  // Передаем данные как проп компоненту Catalog
  return <Catalog />;
}