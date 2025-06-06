import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export async function GetUsers() {
  const token = localStorage.getItem("token");
  const { data } = await api.get(`/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function CreateUser(body) {
  const token = localStorage.getItem("token");
  const { data } = await api.post(`/usuarios`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function UpdateUser(id, body) {
  const { data } = await api.put(`/usuarios/${id}`, body);
  return data;
}

export async function DeleteUser(id) {
  const { data } = await api.delete(`/usuarios/${id}`);
  return data;
}
