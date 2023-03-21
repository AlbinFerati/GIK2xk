import api from '../api.js';

export async function getAll(url = '/prods') {
  const result = await api.get(url);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getOne(id) {
  const result = await api.get(`/product/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function update(product) {
  const result = await api.put(`/product/`, product);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function create(product) {
  const result = await api.post(`/product/`, product);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function obliterate(id) {
  const result = await api.delete(`/product/`, { data: { id } });

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
