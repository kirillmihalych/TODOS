const reducer = (state, action) => {
  // add functional
  if (action.type === 'SET_QUERY') {
    return { ...state, query: action.payload }
  }
  if (action.type === 'SET_TASK') {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: new Date().getTime(),
          name: action.payload,
          completed: false,
        },
      ],
    }
  }
  // delete functional
  if (action.type === 'REMOVE_TASK') {
    let tempId = action.payload
    let tempTasks = state.tasks.filter((task) => task.id !== tempId)
    return { ...state, tasks: tempTasks }
  }
  // update functional
  if (action.type === 'SET_CURRENT_TASK') {
    let tempTask = action.payload
    return { ...state, isEditing: true, currentTask: tempTask }
  }
  if (action.type === 'UPDATE_TASKS') {
    const { id, updatedTask } = action.payload
    let tempTasks = state.tasks.map((task) =>
      task.id === id ? updatedTask : task
    )
    return { ...state, tasks: tempTasks, isEditing: false }
  }
  throw Error(`there is no matching "${action.type}"`)
}

export default reducer
