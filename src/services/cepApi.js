import axios from 'axios';

const api = axios.create();

export async function getAddress(cep) {
  const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}