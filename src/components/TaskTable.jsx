export const TaskTable = ({ children }) => {
  return (
    <table className="table table-dark table-bordered table-hover table-striped mt-4">
      <thead className="bg-dark text-light">
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
