export const TaskRow = ({ task, onDeleteTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <button className="btn btn-danger" onClick={handleDeleteTask}>
          delete
        </button>
      </td>
    </tr>
  );
};
