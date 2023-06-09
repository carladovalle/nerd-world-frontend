import { api } from './api';

export async function getCarts(token) {
  const response = await api.get('/carts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}