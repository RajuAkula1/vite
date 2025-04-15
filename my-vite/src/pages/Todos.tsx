import React, { useEffect, useState } from "react";

// JSONPlaceholder /todos shape
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data: Todo[] = await res.json();
        setTodos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div>Loading Todos…</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  }

  // Display the first 10 todos
  return (
    <div className="container">
      <h3>Todos</h3>
      <ul className="list-group">
        {todos.slice(0, 10).map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className="form-check-input me-2"
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
