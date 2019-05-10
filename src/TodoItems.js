import React from "react";

const TodoItems = ({ todos, changeStatus }) => {
  return (
    <div>
      {todos &&
        todos.map(todo => (
          <ol key={todo.id}>
            <li
              style={{
                textDecoration:
                  todo.completed === true ? "line-through" : "none",
                textTransform:
                  todo.completed === true ? "uppercase" : "lowercase"
              }}
            >
              <h3 onClick={() => changeStatus(todo.id)}>{todo.value}</h3>
            </li>
          </ol>
        ))}
    </div>
  );
};
export default TodoItems;
