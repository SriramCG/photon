export const API_URL_ROOT = 'https://jsonplaceholder.typicode.com';

export async function post(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}

export async function get(url) {
  return await fetch(`${API_URL_ROOT}/${url}`, {});
}

export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
export async function patch(url) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
