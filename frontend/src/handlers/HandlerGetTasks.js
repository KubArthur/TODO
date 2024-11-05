import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
