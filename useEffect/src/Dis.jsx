

export const Dis = ({ todo }) => {
  return (
    <ul>
      {todo.map((todoItem) => (
        <li key={todoItem.id}>{todoItem.title}</li>
      ))}
    </ul>
  );
};
