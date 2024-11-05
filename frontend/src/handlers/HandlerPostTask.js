import axios from "axios";

export const postTask = async (task) => {
  try {
    const response = await axios.post("http://localhost:8080/api/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};
