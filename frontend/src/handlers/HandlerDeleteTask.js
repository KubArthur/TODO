import axios from "axios";

export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
