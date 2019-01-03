import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from './store/actions'

const TodoList = ({ todos, requestTodoList }) => (
  <div>
    <ul>
      {todos.data.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    {todos.loading && <div>Loading...</div>}
    <button onClick={() => requestTodoList()}>Load todos</button>
  </div>
)

const mapStateToProps = ({ todos }) => ({
  todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
