const initialState = {
  data: [],
  loading: false,
  error: false,
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_TODO_LIST':
      return { ...state, loading: true }
    case 'SUCCESS_GET_TODO_LIST':
      return { data: action.payload.data, loading: false, error: false }
    case 'FAILURE_GET_TODO_LIST':
      return { data: [], loading: false, error: true }
    default:
      return state
  }
}
