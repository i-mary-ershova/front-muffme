// Утилиты для работы с аутентификацией через Bearer-токен

// Ключи для хранения в localStorage
const AUTH_TOKEN_KEY = 'auth_token';
const USER_PROFILE_KEY = 'user_profile';
const USER_ID_KEY = 'user_id';

// Получить токен из localStorage
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
  return null;
};

// Сохранить токен в localStorage
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
};

// Удалить токен из localStorage (выход)
export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_PROFILE_KEY);
    localStorage.removeItem(USER_ID_KEY);
  }
};

// Сохранить ID пользователя
export const setUserId = (id: number | string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_ID_KEY, id.toString());
  }
};

// Получить ID пользователя
export const getUserId = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(USER_ID_KEY);
  }
  return null;
};

// Сохранить профиль пользователя
export const setUserProfile = (profile: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
    // Если в профиле есть ID, сохраняем его отдельно для быстрого доступа
    if (profile && profile.id) {
      setUserId(profile.id);
    }
  }
};

// Получить профиль пользователя
export const getUserProfile = (): any | null => {
  if (typeof window !== 'undefined') {
    const profile = localStorage.getItem(USER_PROFILE_KEY);
    return profile ? JSON.parse(profile) : null;
  }
  return null;
};

// Проверка, авторизован ли пользователь
export const isAuthenticated = (): boolean => {
  return !!getAuthToken() && !!getUserId();
};

// Получение заголовков авторизации для запросов
export const getAuthHeaders = (): HeadersInit => {
  const token = getAuthToken();
  return token 
    ? { 'Authorization': `Bearer ${token}` }
    : {};
}; 