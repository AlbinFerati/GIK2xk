import api from '../api.js';

export async function getAvgRating(id) {
  try {
    const ratings = await getRating(id);
    const sum = ratings.reduce((acc, rating) => acc + rating.counter, 0);
    const avg = sum / ratings.length;
    return avg;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRating(id) {
  try {
    const response = await api.get(`/product/${id}/getRating`, {
      data: { id },
    });
    return response.data || [];
  } catch (error) {
    console.error(error);
    return [];
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
