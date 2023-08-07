import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTaskName.trim() != "") {
      createNewTask(newTaskName);
      setNewTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <div className="form-group flex-grow-1 me-2">
        <input
          type="text"
          name="taskInput"
          placeholder="enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control w-100"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        save task
      </button>
    </form>
  );
};
