import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { TaskRow } from "./components/TaskRow";
function App() {
  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    const newTask = {
      id: taskItems.length > 0 ? taskItems[taskItems.length - 1].id + 1 : 1,
      name: taskName,
    };
    setTaskItems([...taskItems, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = taskItems.filter(
      (task) => task.id !== taskToDelete.id
    );

    const recalculatedTasks = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));

    setTaskItems(recalculatedTasks);
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="container mt-4 p-4 shadow-lg bg-secondary text-white rounded shadow-lg">
      <h1>Task list 2023</h1>
      <div className="mb-5">
        <TaskCreator createNewTask={createNewTask} />
      </div>
      <div>
        <TaskTable taskItems={taskItems}>
          {taskItems.map((task) => (
            <TaskRow
              task={task}
              key={task.id}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </TaskTable>
      </div>
    </main>
  );
}

export default App;
