import { getAuthHeaders, removeAuthToken, getUserId } from './auth';

// Базовый URL API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Типизация ответа от сервера при аутентификации
interface AuthResponse {
  access_token: string;
  user: any; // можно заменить на конкретный тип профиля пользователя
}

// Простой API-клиент для работы с бэкендом
export const api = {
  // Обычный запрос (без аутентификации)
  async request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (response.status === 401) {
      removeAuthToken();
    }    
    return response;
  },


  async authRequest(endpoint: string, options: RequestInit = {}) {
    const headers = { 
      ...options.headers,
      ...getAuthHeaders(),
      'Content-Type': 'application/json'
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });
    
    if (response.status === 401) {
      removeAuthToken();
    }
    
    return response;
  },

  async get(endpoint: string, authenticated = true) {
    const method = authenticated ? this.authRequest : this.request;
    const response = await method(endpoint, { method: 'GET' });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },

  // POST запрос
  async post(endpoint: string, data: any, authenticated = true) {
    const method = authenticated ? this.authRequest : this.request;
    const response = await method(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },

  // PUT запрос
  async put(endpoint: string, data: any, authenticated = true) {
    const method = authenticated ? this.authRequest : this.request;
    const response = await method(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },

  // DELETE запрос
  async delete(endpoint: string, authenticated = true) {
    const method = authenticated ? this.authRequest : this.request;
    const response = await method(endpoint, { method: 'DELETE' });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },

  // Запрос верификационного кода
  async requestCode(phoneNumber: string): Promise<{ message: string }> {
    return this.post('/auth/request-code', { phoneNumber }, false);
  },

  // Верификация кода и получение токена
  async verifyCode(phoneNumber: string, code: string): Promise<AuthResponse> {
    return this.post('/auth/verify', { phoneNumber, code }, false);
  },

  async getProfile(userId: string | number) {
    return this.get(`/users/${userId}`, true);
  },

  // Получение профиля текущего пользователя
  async getCurrentUserProfile() {
    const userId = getUserId();
    if (!userId) {
      throw new Error('User ID not found. Please login again.');
    }
    return this.getProfile(userId);
  },

  // Обновление профиля пользователя
  async updateProfile(userId: string | number, data: any) {
    return this.put(`/users/${userId}`, data, true);
  },
  
  // Обновление профиля текущего пользователя
  async updateCurrentUserProfile(data: any) {
    const userId = getUserId();
    if (!userId) {
      throw new Error('User ID not found. Please login again.');
    }
    return this.updateProfile(userId, data);
  }
}; 