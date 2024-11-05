// src/components/Dashboard.js

import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { getTasks } from "../handlers/HandlerGetTasks";
import { postTask } from "../handlers/HandlerPostTask";
import { putTask } from "../handlers/HandlerPutTask";
import { deleteTask } from "../handlers/HandlerDeleteTask";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const toast = React.useRef(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  const saveTask = async () => {
    if (isEditing) {
      await putTask(task.id, task);
    } else {
      await postTask(task);
    }
    fetchTasks();
    setVisible(false);
    showToast("Task saved successfully!");
    setTask({ title: "", description: "", completed: false });
    setIsEditing(false);
  };

  const editTask = (task) => {
    setTask(task);
    setIsEditing(true);
    setVisible(true);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
    showToast("Task deleted successfully!");
  };

  const showToast = (message) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };

  return (
    <div className="dashboard-container">
      <h1>Task Management</h1>
      <Button
        label="Add Task"
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
        className="add-task-button"
      />
      <Toast ref={toast} />

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <span className="task-description">{task.description}</span>
            <span className="task-status">
              {task.completed ? "Done" : "Pending"}
            </span>
            <Button
              label="Edit"
              icon="pi pi-pencil"
              onClick={() => editTask(task)}
            />
            <Button
              label="Delete"
              icon="pi pi-trash"
              onClick={() => handleDeleteTask(task.id)}
            />
          </li>
        ))}
      </ul>

      <Dialog header="Task" visible={visible} onHide={() => setVisible(false)}>
        <InputText
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <InputText
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <Button label="Save" onClick={saveTask} />
      </Dialog>
    </div>
  );
};

export default Dashboard;
