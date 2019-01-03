import { all, takeEvery, put, call } from 'redux-saga/effects'

function apiGet() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 1' },
        { id: 3, text: 'Task 1' },
        { id: 4, text: 'Task 1' },
      ])
    }, 1000)
  })
}

function* getTodoList() {
  try {
    const response = yield call(apiGet)
    yield put({ type: 'SUCCESS_GET_TODO_LIST', payload: { data: response } })
  } catch (error) {
    yield put({ type: 'FAILURE_GET_TODO_LIST' })
  }
}

export default function* rootSaga() {
  yield all([takeEvery('REQUEST_TODO_LIST', getTodoList)])
}
