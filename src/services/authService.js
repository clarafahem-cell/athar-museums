
import axiosClient from "../api/axiosClient";

// Register
export const register = async (name, email, password) => {
  const response = await axiosClient.post("/api/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
};

// Login
export const login = async (email, password) => {
  const response = await axiosClient.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
};

// Get Profile
export const getProfile = async () => {
  const response = await axiosClient.get("/api/auth/profile");

  return response.data;
};
