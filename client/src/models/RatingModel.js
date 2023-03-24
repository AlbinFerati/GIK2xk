import api from '../api.js';

export async function getRating(id) {
  try {
    const response = await api.get(`/product/${id}/getRating`);
    return response.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function getAvgRating(ratings) {
  if (ratings) {
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const avg = sum / ratings.length;
    return avg;
  }
}

export async function getAll() {
  const result = await api.get('/rating');

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
