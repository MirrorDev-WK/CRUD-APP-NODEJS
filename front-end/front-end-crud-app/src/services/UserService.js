import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const UserService = {
  getAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  },
  createUser: async (user) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  },
  updateUser: async (id, book) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, book);
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.data;
  },
};

export default UserService;
