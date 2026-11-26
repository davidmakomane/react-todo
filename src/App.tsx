import { useState } from "react";
import type { Task } from "./types/task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

    function addTask() {
          const newTask: Task = {
          id: Date.now(),
           title: title,
           description: description,
           dueDate: dueDate,
           completed: false,
  };

       setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
        setDueDate("");
}

       function deleteTask(id: number) {
       setTasks(tasks.filter((task) => task.id !== id));
}

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <p>Keep track of your daily tasks.</p>

      <div className="task-form">
        <h2>Add a new task</h2>

        <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
      

        <textarea 
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
       />
     

          <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
         />

       
      <button onClick={addTask}>Add Task</button>
      </div>

    <div className="task-list">
  <h2>My Tasks</h2>

  {tasks.map((task) => (
    <div className="task-item" key={task.id}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
      </div>

      <div className="task-actions">
        <button>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>
</div>
);
}

export default App;
