import api from '../api.js';

export async function getAll() {
  const result = await api.get('/user');

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
