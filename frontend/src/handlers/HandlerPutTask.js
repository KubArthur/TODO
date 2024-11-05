// src/handlers/updateTask.js

import axios from "axios";

export const putTask = async (id, task) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/tasks/${id}`,
      task
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};
