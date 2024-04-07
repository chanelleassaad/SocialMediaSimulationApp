import axios from 'axios';

const baseUrl = 'https://66100a060640280f219c27d4.mockapi.io/api/sm';
const api = axios.create({
  baseURL: baseUrl,
});

export const loginUser = async (username, password) => {
  try {
    const response = await api.get(
      `/users?username=${username}&password=${password}`,
    );
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (username, email, password, isAdmin) => {
  try {
    // Check if email is already in use
    const emailResponse = await api.get(`/users?email=${email}`);
    if (emailResponse.data.length > 0) {
      throw new Error('Email already in use');
    }

    // Check if username is already in use
    const usernameResponse = await api.get(`/users?username=${username}`);
    if (usernameResponse.data.length > 0) {
      throw new Error('Username already in use');
    }

    // Create the new user
    const user = {
      username: username,
      email: email,
      password: password,
      isAdmin: isAdmin,
    };
    const newUserResponse = await api.post('/users', user);

    return newUserResponse.data;
  } catch (error) {
    throw error;
  }
};
