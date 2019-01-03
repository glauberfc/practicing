export function addTodo(text) {
  return {
    type: 'ASYNC_ADD_TODO',
    payload: {
      text,
    },
  }
}
