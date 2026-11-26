
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Todo List</h1>
      <p>Keep track of your daily tasks.</p>

      <div className="task-form">
        <h2>Add a new task</h2>

        <input
          type="text"
          placeholder="Task title"
        />

        <textarea
          placeholder="Task description"
        />

        <input
          type="date"
        />

        <button>Add Task</button>
      </div>

      <div className="task-list">
        <h2>My Tasks</h2>

        <div className="task-item">
          <div>
            <h3>Complete React assignment</h3>
            <p>Due: 26 November 2026</p>
          </div>

          <div className="task-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>

        <div className="task-item">
          <div>
            <h3>Read TypeScript notes</h3>
            <p>Due: 27 November 2026</p>
          </div>

          <div className="task-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
