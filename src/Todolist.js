import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : "active"}>
            {task.text}{" "}
            <button onClick={() => toggleTask(index)}>
              {task.completed ? "Activate" : "Complete"}
            </button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Active Tasks</h2>
        <ul>
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <li key={index}>{task.text}</li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <li key={index}>{task.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
