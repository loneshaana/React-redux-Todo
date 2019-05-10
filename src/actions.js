let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  completed: false,
  value: text
});

export const changeStatus = id => ({
  type: "CHANGE_STATUS",
  id: id
});

export const changeVisibility = value => ({
  type: value
});
