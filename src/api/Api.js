import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

export const fetchUsers = () => Api.get(`/users`);
export const deleteUser = (id) => Api.delete(`/users/${id}`)

export default Api;
